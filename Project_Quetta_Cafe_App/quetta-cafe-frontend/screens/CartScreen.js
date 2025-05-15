import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is empty', 'Please add some items before checkout');
      return;
    }
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rs {item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
                  <Text style={styles.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <Text style={styles.total}>Total: Rs {totalPrice.toFixed(2)}</Text>

          <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
            <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.checkoutBtn, styles.clearBtn]} onPress={clearCart}>
            <Text style={styles.checkoutBtnText}>Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f3ee' },
  heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#3e3e3e' },
  emptyText: { fontSize: 18, textAlign: 'center', marginTop: 50, color: '#777' },
  cartItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: { fontSize: 18, color: '#333' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#4CAF50' },
  removeBtn: {
    backgroundColor: '#ff5722',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  removeBtnText: { color: '#fff', fontWeight: '600' },
  total: { fontSize: 22, fontWeight: 'bold', textAlign: 'right', marginVertical: 15, color: '#3e3e3e' },
  checkoutBtn: {
    backgroundColor: '#6b705c',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  clearBtn: {
    backgroundColor: '#b00020',
  },
  checkoutBtnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 },
});

export default CartScreen;
