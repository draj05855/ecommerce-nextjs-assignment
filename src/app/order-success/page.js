import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with us.</p>

      <Link href="/">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
