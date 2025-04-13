import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const JobsListScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://192.168.100.114:5000/api/jobs'); // Updated API URL
        setJobs(response.data);
      } catch (error) {
        console.error('❌ Error fetching jobs:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Jobs</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.jobItem}
              onPress={() => navigation.navigate('JobDetail', { job: item })}
            >
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>{item.company} - {item.location}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  jobItem: { padding: 15, marginVertical: 8, backgroundColor: '#ffffff', borderRadius: 5, elevation: 2 },
  jobTitle: { fontSize: 18, fontWeight: 'bold', color: '#007bff' },
});

export default JobsListScreen;
