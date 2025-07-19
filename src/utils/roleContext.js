// RoleContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null); // could be Admin, Auditor, Viewer etc.

  useEffect(() => {
    async function fetchStoredRole() {
      try {
        const storedRole = await AsyncStorage.getItem('userRole');
        if (storedRole) {
          setRole(storedRole);
        }
      } catch (error) {
        console.error('Failed to fetch role from storage:', error);
      }
    }
    fetchStoredRole();
  }, []);

  useEffect( () => {
    async function storeRole() {
        try {
            if (role) {
            await AsyncStorage.setItem('userRole', role);
            } else {
            await AsyncStorage.removeItem('userRole');
            }
        } catch (error) {
            console.error('Failed to store role:', error);
        }
        }
  storeRole();
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRoleContext must be used within a RoleProvider');
  }
  return context;
};
