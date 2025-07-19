/**
 *
 *
 * @format
 */

import { StyleSheet } from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: '#00bf7cff' },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginTop: 8,
      paddingTop: 20,
    },
    logoIcon: { fontSize: 18, marginRight: 8 },
    logoText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
    scrollContent: { padding: 16, paddingBottom: 80 },
    successBox: {
      backgroundColor: '#00000030',
      borderRadius: 4,
      padding: 16,
      marginBottom: 16,
    },
    successTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6,
      color: '#fff',
    },
    successDesc: { fontSize: 15, color: '#e6dbdbff' },
    card: {
      backgroundColor: '#00000030',
      borderRadius: 4,
      padding: 16,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#fff',
    },
    ratingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    ratingLabel: { fontSize: 16, color: '#e6dbdbff' },
    ratingValue: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
    commentsText: {
      fontSize: 15,
      color: '#333',
      marginTop: 4,
      color: '#e6dbdbff',
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: '#00000050',
      paddingVertical: 16,
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    footerBtn: {},
    footerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    checklistItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      marginVertical: 6,
      justifyContent: 'space-between',
    },
    checklistChecked: { backgroundColor: '#e6f0ff', borderColor: '#2e6cf6' },
    checklistText: { fontSize: 16, color: '#333' },
    checklistTextChecked: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
