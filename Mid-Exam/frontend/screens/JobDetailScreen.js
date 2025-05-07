import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function JobDetailScreen({ route }) {
  const { job } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Company Logo */}
        <Image source={{ uri: job.companyLogo }} style={styles.companyLogo} />
        
        {/* Job Title and Company */}
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>

        {/* Description */}
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{job.description}</Text>

        {/* Requirements */}
        <Text style={styles.label}>Requirements:</Text>
        <Text style={styles.text}>{job.requirements}</Text>

        {/* Location */}
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.text}>{job.location}</Text>

        {/* Salary */}
        <Text style={styles.label}>Salary:</Text>
        <Text style={styles.salary}>{job.salary}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  company: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginTop: 5,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c8b6f', // Greenish color for salary
    marginTop: 8,
  },
});
