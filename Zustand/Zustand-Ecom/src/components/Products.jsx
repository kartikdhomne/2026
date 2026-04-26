import { useEffect } from "react";
import { useStore } from "../store/useStore";

export default function Products() {
  const { products, fetchProducts, addToCart, loading } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2 className="text-center text-lg mt-10">Loading...</h2>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          <img
            src={p.image}
            alt={p.title}
            className="h-40 object-contain mb-4"
          />

          <h4 className="font-semibold text-sm mb-2 line-clamp-2">{p.title}</h4>

          <p className="text-lg font-bold text-blue-600 mb-3">₹{p.price}</p>

          <button
            onClick={() => addToCart(p)}
            className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
