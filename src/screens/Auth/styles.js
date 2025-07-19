/**
 * 
 * 
 * @format
 */

import { StyleSheet } from "react-native";

export const getStyles = () => StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00bf7cff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: 'serif',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'serif',
    marginBottom: 6,
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 24,
  },
  rolesContainer: {
    marginBottom: 32,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
        color: '#fff',

  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',

  },
  roleLabel: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'serif',
  },
  loginButton: {
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,

  },
  loginButtonText: {
    color: '#00bf7cff',
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'serif',
  },
});