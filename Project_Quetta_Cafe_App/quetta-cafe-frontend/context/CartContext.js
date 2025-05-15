import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find(i => i.name === item.name);
    if (exists) {
      setCartItems(prev =>
        prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    setCartItems(prev => prev.filter(i => i.name !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
