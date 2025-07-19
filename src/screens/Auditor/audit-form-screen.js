import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { getStyles } from './auditFormStyles';
import { Routes } from '../../navigation/routes';
import { checklistItems } from '../../utils/checklistItems';
import Header from '../../components/Header/header';

const AuditorScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(1);
  const [checklist, setChecklist] = useState({
    exits: false,
    extinguishers: false,
    firstAid: false,
    signage: false,
  });
  const [comments, setComments] = useState('');
  const styles = getStyles();

  const handleChecklistToggle = key => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const submitAudit = async () => {
    let savedAuditData = await AsyncStorage.getItem('auditData');
    let auditData = [];
    savedAuditData
      ? (auditData = JSON.parse(savedAuditData))
      : (auditData = []);
    auditData.push({
      rating,
      checklist,
      comments,
      date: Date.now(),
      id: auditData.length + 1,
    });
    await AsyncStorage.setItem('auditData', JSON.stringify(auditData));
    setRating(1);
    setChecklist({
      exits: false,
      extinguishers: false,
      firstAid: false,
      signage: false,
    });
    setComments('');
    setStep(1);
    navigation.navigate(Routes.AuditSummaryScreen, {
      rating,
      checklist,
      comments,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View>
            <Text style={styles.title}>General Assessment</Text>
            <Text style={styles.subtitle}>
              Rate the overall safety conditions and compliance
            </Text>
            <View style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map(num => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.ratingCircle,
                    rating === num && styles.ratingSelected,
                  ]}
                  onPress={() => setRating(num)}
                >
                  <Text
                    style={
                      rating === num
                        ? styles.ratingTextSelected
                        : styles.ratingText
                    }
                  >
                    {num}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.ratingLabels}>
              <Text style={styles.whiteText}>Poor</Text>
              <Text style={styles.whiteText}>Excellent</Text>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={styles.title}>Safety Compliance Checklist</Text>
            {checklistItems.map(item => (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.checklistItem,
                  checklist[item.key] && styles.checklistChecked,
                ]}
                onPress={() => handleChecklistToggle(item.key)}
              >
                <Text
                  style={
                    checklist[item.key]
                      ? styles.checklistTextChecked
                      : styles.checklistText
                  }
                >
                  {checklist[item.key] ? '✔ ' : ''}
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 3:
        return (
          <View>
            <Text style={styles.title}>Additional Comments</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter additional comments or concerns"
              value={comments}
              onChangeText={setComments}
              multiline
              numberOfLines={6}
              placeholderTextColor={'#fff'}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.header}>Safety Audit</Text>
      <View style={styles.progressBarContainer}>
        <Text style={styles.stepText}>Step {step} of 3</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBar, { width: `${step * 33.33}%` }]} />
        </View>
      </View>
      <View style={styles.content}>{renderStep()}</View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.draftButton}
          disabled={step == 1}
          onPress={() => setStep(step - 1)}
        >
          <Text style={styles.draftButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setStep(step < 3 ? step + 1 : submitAudit())}
        >
          <Text style={styles.nextButtonText}>
            {step < 3 ? 'Next Step' : 'Finish'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuditorScreen;
