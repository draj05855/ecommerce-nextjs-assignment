import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Explore Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
