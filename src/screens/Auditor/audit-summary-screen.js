/**
 *
 * AuditSummaryScreen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { getStyles } from './auditsummaryStyle';
import { checklistItems } from '../../utils/checklistItems';
import Header from '../../components/Header/header';

const AuditSummaryScreen = ({ navigation, route }) => {
  // Expecting params: ratings (array of {label, value}), comments (string)
  const {
    rating = 0,
    comments = '',
    checklist = {
      exits: false,
      extinguishers: false,
      firstAid: false,
      signage: false,
    },isView=false
  } = route.params || {};

  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Success Message */}
        {!isView&&<View style={styles.successBox}>
          <Text style={styles.successTitle}>Audit Submission Successful</Text>
          <Text style={styles.successDesc}>
            Your audit has been successfully submitted. Below is a summary of
            the ratings and comments provided.
          </Text>
        </View>}

        {/* Ratings Recap */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ratings Recap</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Safety Overall Rating:</Text>
            <Text style={styles.ratingValue}>{rating}/5</Text>
          </View>
        </View>

        {/* CheckList Details */}
        <View style={styles.card}>
          <View>
            <Text style={styles.sectionTitle}>Safety Compliance Checklist</Text>
            {checklistItems.map(item => (
              <TouchableOpacity
                key={item.key}
                style={[styles.checklistItem]}
                disabled
              >
                <Text style={styles.ratingLabel}>{item.label}</Text>
                <Text style={styles.checklistTextChecked}>
                  {checklist[item.key] ? '✔ ' : 'X  '}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Comments Summary */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Comments Summary</Text>
          <Text style={styles.commentsText}>{comments}</Text>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      {!isView&&<View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerBtn}
          disabled
          onPress={() => navigation.navigate('AuditHistory')}
        >
          <Text style={styles.footerBtnText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerBtnText}>Start New Audit</Text>
        </TouchableOpacity>
      </View>}
    </SafeAreaView>
  );
};

export default AuditSummaryScreen;
