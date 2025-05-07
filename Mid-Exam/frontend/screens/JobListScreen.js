import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function JobListScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.134:5000/api/jobs') // Replace <YOUR-IP> with your local IP
      .then((response) => setJobs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('JobDetail', { job: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#f1f1f1', padding: 12, marginBottom: 10, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
