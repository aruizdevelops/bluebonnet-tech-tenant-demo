'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((smoothie, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.smoothie.id === smoothie.id);
      if (existing) {
        return prev.map((item) =>
          item.smoothie.id === smoothie.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { smoothie, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((smoothieId) => {
    setItems((prev) => prev.filter((item) => item.smoothie.id !== smoothieId));
  }, []);

  const updateQuantity = useCallback((smoothieId, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.smoothie.id !== smoothieId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.smoothie.id === smoothieId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.smoothie.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}

export default CartContext;
