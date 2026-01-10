"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { OrdersContext } from "@/context/OrdersContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, placeOrder } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);
  const router = useRouter();

  const handlePlaceOrder = () => {
    addOrder(cart);      // ✅ order save
    placeOrder();        // cart empty
    router.push("/order-success"); // redirect
  };

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={handlePlaceOrder}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Place Order
      </button>
    </div>
  );
}
