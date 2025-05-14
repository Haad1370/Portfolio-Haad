import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { API } from '../utils/api';
import CafeItemCard from '../components/CafeItemCard';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCafeItems = async () => {
    try {
      const response = await API.get('/cafe');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching cafe items:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCafeItems();
  }, []);

  // Setup the cart icon in the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{ marginRight: 15 }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon name="cart-outline" size={28} color="#6b705c" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quetta Café Menu</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#6b705c" />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CafeItemCard item={item} navigation={navigation} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f4f3ee',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3e3e3e',
  },
});

export default HomeScreen;
