/**
 * Login Screen Component
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import {  useRoleContext } from '../../utils/roleContext';
import { getStyles } from './styles';

const roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Auditor', value: 'auditor' },
    { label: 'Viewer', value: 'viewer' },
];

const LoginScreen = ({ navigation }) => {
    const [selectedRole, setSelectedRole] = useState(null);
    const {  setRole } = useRoleContext();
    const styles = getStyles();


    const handleLogin = () => {
        if (selectedRole) {
            setRole(selectedRole);
            // Navigate to the main app screen, e.g., 'Home'
            // navigation.replace('Home');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>AuditMaster</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to AuditMaster</Text>
                <Text style={styles.subtitle}>Please select your role to continue</Text>
                <View style={styles.rolesContainer}>
                    {roles.map((role) => (
                        <TouchableOpacity
                            key={role.value}
                            style={styles.roleOption}
                            onPress={() => setSelectedRole(role.value)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.radioCircle}>
                                {selectedRole === role.value && <View style={styles.selectedRb} />}
                            </View>
                            <Text style={styles.roleLabel}>{role.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity
                    style={[
                        styles.loginButton,
                        { backgroundColor: selectedRole ? '#fff' : '#ffffff50'}
                    ]}
                    onPress={handleLogin}
                    disabled={!selectedRole}
                >
                    <Text style={[styles.loginButtonText,{color: selectedRole ? '#00bf7cff' : '#000'}]}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default LoginScreen;