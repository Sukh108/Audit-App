/**
 *
 *
 * @format
 */

import { StyleSheet } from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00bf7cff',
      padding: 16,
      paddingTop: 24,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginTop: 8,
      paddingTop: 20,
    },
    logoIcon: { fontSize: 18, marginRight: 8 },
    logoText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
    card: {
      backgroundColor: '#00000030',
      borderRadius: 4,
      padding: 6,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      alignItems:"center"
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#fff',
    },
    Row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    timeLabel: { fontSize: 16, color: '#e6dbdbff' },
    scrollContent: { padding: 10, paddingBottom: 80 },
    actionButtonContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      width: '100%',
    },
    actionButton: {
      backgroundColor: '#2e6cf6',
      borderRadius: 8,
      alignItems: 'center',
      padding:15,
      paddingHorizontal:7
    },
    actionButtonText: { color: '#fff' },
    cardLeftContainer:{ width: '65%' },
    cardRightContainer:{ width: '35%' }
  });
