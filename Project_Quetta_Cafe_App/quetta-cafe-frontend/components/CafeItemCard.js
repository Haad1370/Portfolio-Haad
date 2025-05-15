import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CartContext } from '../context/CartContext';

const CafeItemCard = ({ item, navigation }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleViewDetails = () => {
    navigation.navigate('ProductDetail', { item });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.price}>Rs {item.price}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.detailsButton]}
            onPress={handleViewDetails}
          >
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    fontSize: 14,
    color: '#777',
    marginVertical: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#ff5722',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  detailsButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default CafeItemCard;
