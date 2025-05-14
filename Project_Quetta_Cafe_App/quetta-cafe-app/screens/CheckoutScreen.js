import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD'); // only COD for now

  const handlePlaceOrder = () => {
    if (!name.trim() || !address.trim() || !mobile.trim()) {
      Alert.alert('Missing information', 'Please fill all the fields');
      return;
    }

    // Here you could send the order to backend or save it

    Alert.alert(
      'Order Placed!',
      `Thank you, ${name}. Your order has been placed.\nPayment method: ${paymentMethod}`,
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Checkout</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter your delivery address"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.paymentOption}>
          <TouchableOpacity
            style={[
              styles.radioCircle,
              paymentMethod === 'COD' && styles.selectedRadio,
            ]}
            onPress={() => setPaymentMethod('COD')}
          />
          <Text style={styles.paymentText}>Cash on Delivery (COD)</Text>
        </View>

        <TouchableOpacity style={styles.placeOrderBtn} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderBtnText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f4f3ee',
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3e3e3e',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    elevation: 2,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6b705c',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    backgroundColor: '#6b705c',
  },
  paymentText: {
    fontSize: 16,
    color: '#444',
  },
  placeOrderBtn: {
    backgroundColor: '#6b705c',
    paddingVertical: 16,
    borderRadius: 12,
  },
  placeOrderBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CheckoutScreen;
