"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-Commerce
        </Link>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/admin/orders" className="hover:text-blue-600">Admin Orders</Link>
          <Link href="/admin/add-product" className="hover:text-blue-600">Add Product</Link>

          <Link
            href="/cart"
            className="bg-black text-white px-4 py-1 rounded-full text-sm"
          >
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
