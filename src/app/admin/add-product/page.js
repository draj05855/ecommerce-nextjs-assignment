"use client";

import { useState } from "react";
import products from "@/data/products";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
    };

    products.push(newProduct); // dummy add
    alert("Product added successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Product (Admin)
        </h1>

        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
