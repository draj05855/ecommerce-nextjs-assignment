"use client";
import { createContext, useState } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (cartItems) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      createdAt: new Date().toLocaleString(),
    };

    setOrders((prev) => [...prev, newOrder]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
