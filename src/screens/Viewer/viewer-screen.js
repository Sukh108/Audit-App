import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getStyles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Routes } from '../../navigation/routes';
import { useRoleContext } from '../../utils/roleContext';
import Header from '../../components/Header/header';

export default function ViewerScreen({ navigation }) {
  const styles = getStyles();
  const [auditList, setAuditList] = useState([]);
  const { role } = useRoleContext();

  useEffect(async () => {
    const data = JSON.parse(await AsyncStorage.getItem('auditData'));
    setAuditList(data);
  }, []);

  const handleDelete = async id => {
    const listAfterDelete = auditList.filter(it => it?.id !== id);
    setAuditList(listAfterDelete);
    await AsyncStorage.setItem('auditData', JSON.stringify(listAfterDelete));
  };

  const Card = ({ item }) => {
    const date = new Date(item?.date);
    return (
      <View style={[styles.card]}>
        <View style={styles.cardLeftContainer}>
          <Text style={styles.sectionTitle}>Audit #{item?.id}</Text>
          <Text style={styles.timeLabel}>Submitted On</Text>
          <Text style={styles.timeLabel}>
            {date?.toDateString()} {date?.toTimeString()}
          </Text>
        </View>
        <View style={styles.cardRightContainer}>
          <View style={styles.actionButtonContainer}>
            {role == 'admin' && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDelete(item?.id)} 
              >
                <Text style={styles.actionButtonText}>Delete</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                navigation.navigate(Routes.AuditSummaryScreen, {
                  ...item,
                  isView: true,
                })
              }
            >
              <Text style={styles.actionButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header/>
      <FlatList
        contentContainerStyle={styles.scrollContent}
        data={auditList}
        renderItem={({ item, index }) => (
          <Card item={item} key={index.toString()} />
        )}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
}
