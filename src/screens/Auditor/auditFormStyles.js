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
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 8,
      color: '#fff',
    },
    progressBarContainer: { marginVertical: 8 },
    stepText: { textAlign: 'left', marginBottom: 4, color: '#fff' },
    progressBarBg: { height: 6, backgroundColor: '#eee', borderRadius: 3 },
    progressBar: { height: 6, backgroundColor: '#2e6cf6', borderRadius: 3 },
    content: { flex: 1, justifyContent: 'center' },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 12,
            color: '#fff',

    },
    subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 16,      color: '#fff',
 },
    ratingRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 12,
    },
    ratingCircle: {
      width: 36,
      height: 36,
      borderRadius: 18,
      borderWidth: 2,
      borderColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 6,
    },
    ratingSelected: { backgroundColor: '#2e6cf6', borderColor: '#2e6cf6' },
    ratingText: { fontSize: 16,       color: '#fff',
 },
    ratingTextSelected: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
    ratingLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 32,
      marginTop: 4,
            color: '#fff',

    },
    whiteText: { color: '#fff' },
    checklistItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginVertical: 6,
      backgroundColor: '#fff',
    },
    checklistChecked: { backgroundColor: '#e6f0ff', borderColor: '#2e6cf6' },
    checklistText: { fontSize: 16, color: '#333' },
    checklistTextChecked: {
      fontSize: 16,
      color: '#2e6cf6',
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      minHeight: "30%",
      marginTop: 12,
      textAlignVertical: 'top',
      color:'#fff'
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 16,
    },
    draftButton: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 14,
      borderRadius: 8,
      marginRight: 8,
      alignItems: 'center',
    },
    draftButtonText: { color: '#333', fontWeight: 'bold' },
    nextButton: {
      flex: 1,
      backgroundColor: '#2e6cf6',
      padding: 14,
      borderRadius: 8,
      marginLeft: 8,
      alignItems: 'center',
    },
    nextButtonText: { color: '#fff', fontWeight: 'bold' },
  });
