"use client";
import { useContext } from "react";
import { OrdersContext } from "@/context/OrdersContext";

export default function AdminOrdersPage() {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Orders</h1>

      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">No orders placed yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">
                    Order ID: <span className="text-gray-600">{order.id}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.createdAt}
                  </p>
                </div>

                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                  Confirmed
                </span>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Products</h3>
                <ul className="space-y-1">
                  {order.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between text-gray-700"
                    >
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
