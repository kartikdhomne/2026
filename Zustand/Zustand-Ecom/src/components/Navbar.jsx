import { useStore } from "../store/useStore";

export default function Navbar() {
  const cart = useStore((state) => state.cart);

  const count = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛍️ Zustand Store</h1>

      <div className="bg-blue-600 px-4 py-2 rounded-full">🛒 {count}</div>
    </div>
  );
}
