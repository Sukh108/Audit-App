/**
 * Root Navigation
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';
import { useRoleContext } from '../utils/roleContext';
import LoginScreen from '../screens/Auth/login-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuditorScreen from '../screens/Auditor/audit-form-screen';
import AuditSummaryScreen from '../screens/Auditor/audit-summary-screen';
import ViewerScreen from '../screens/Viewer/viewer-screen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { role, setRole } = useRoleContext();

  const appStack = () => {
    return (
      <>
        {role !== 'auditor' && (
          <Stack.Screen name={Routes.ViewerScreen} component={ViewerScreen} />
        )}
        {role == 'auditor' && (
          <Stack.Screen
            name={Routes.AuditFormScreen}
            component={AuditorScreen}
          />
        )}
        <Stack.Screen
          name={Routes.AuditSummaryScreen}
          component={AuditSummaryScreen}
        />
      </>
    );
  };

  const authStack = () => {
    return (
      <>
        <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      </>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!role ? authStack() : appStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
