/**
 *
 *
 * @format
 */

import { StyleSheet } from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginTop: 8,
      paddingTop: 20,
      justifyContent: 'space-between',
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    logoIcon: { fontSize: 18, marginRight: 8 },
    logoText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '100%',
      height: '100%',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    policyIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    webViewContainer: { flex: 1, width: '100%', height: '100%' },
  });
