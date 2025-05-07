import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getComments, getUser } from '../services/api';

const PostDetailScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getComments(post.id).then(setComments);
    getUser(post.userId).then(setUser);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>

      {user && (
        <Text
          style={styles.author}
          onPress={() => navigation.navigate('Profile', { user })}
        >
          Posted by: <Text style={{ fontWeight: '600', color: '#222' }}>{user.name}</Text>
        </Text>
      )}

      <Text style={styles.commentsTitle}>Comments</Text>
      {comments.map((c) => (
        <View key={c.id} style={styles.comment}>
          <Text style={styles.commentEmail}>{c.email}</Text>
          <Text style={styles.commentBody}>{c.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  body: {
    fontSize: 16,
    color: '#444',
    marginBottom: 15,
  },
  author: {
    marginBottom: 20,
    fontStyle: 'italic',
    color: '#0066cc',
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  comment: {
    backgroundColor: '#f0f2f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentEmail: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#555',
  },
  commentBody: {
    fontSize: 14,
    color: '#444',
  },
});
