import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PostCard = ({ post, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{post.title}</Text>
    <Text numberOfLines={3} style={styles.body}>{post.body}</Text>
  </TouchableOpacity>
);

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
