import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { OrdersProvider } from "@/context/OrdersContext";

export const metadata = {
  title: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <OrdersProvider>
          <Navbar />
          {children}
          </OrdersProvider>
        </CartProvider>
      </body>
    </html>
  );
}
