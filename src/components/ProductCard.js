"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          <Link href={`/product/${product.id}`} className="hover:text-blue-600">
            {product.name}
          </Link>
        </h3>

        <p className="text-xl font-bold text-gray-900 mb-4">
          ₹{product.price}
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
