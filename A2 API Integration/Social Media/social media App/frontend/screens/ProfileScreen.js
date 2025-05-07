import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.info}>🌐 {user.website}</Text>
      <Text style={styles.company}>🏢 {user.company.name}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
  },
  username: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
  company: {
    fontSize: 16,
    marginTop: 20,
    color: '#555',
    fontStyle: 'italic',
  },
});
