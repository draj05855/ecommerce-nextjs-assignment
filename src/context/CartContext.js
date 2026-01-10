"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔥 YAHAN ADD KARNA THA
  const placeOrder = () => {
    setCart([]); // order ke baad cart clear
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
}
