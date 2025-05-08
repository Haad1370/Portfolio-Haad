import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
    color: '#333',
  },
});
