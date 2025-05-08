import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getBookings } from '../utils/storage';
import MovieCard from '../components/MovieCard';

const BookingsScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Bookings 🎫</Text>
      <FlatList
        data={bookings}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
});
