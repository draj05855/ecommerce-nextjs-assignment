import products from "../../../data/products";

export default async function ProductDetailPage({ params }) {
  const { id } = await params; // 🔑 IMPORTANT LINE

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
