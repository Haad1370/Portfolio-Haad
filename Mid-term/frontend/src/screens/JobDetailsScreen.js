import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobDetailsScreen({ route }) {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#007bff' },
  company: { fontSize: 18, fontWeight: '600', marginTop: 5 },
  location: { fontSize: 16, fontStyle: 'italic', marginVertical: 5 },
  description: { fontSize: 14, marginTop: 10, lineHeight: 22 },
});
