import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getTrendingMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: 'Now Trending 🎬',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Bookings')}
          style={{ marginRight: 15 }}
        >
          <Ionicons name="bookmark-outline" size={26} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});
