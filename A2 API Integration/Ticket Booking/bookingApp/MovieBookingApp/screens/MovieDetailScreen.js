import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { getMovieDetails } from '../services/api';
import { saveBooking } from '../utils/storage';

const MovieDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, []);

  if (!movie) return null;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Button title="Book Ticket 🎟️" onPress={() => saveBooking(movie)} />
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    margin: 10,
  },
  overview: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
    color: '#555',
  },
});
