import { useStore } from "../store/useStore";

export default function Cart() {
  const { cart, removeFromCart, updateQty, getTotal, clearCart } = useStore();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, "dec")}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => updateQty(item.id, "inc")}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold">Total: ₹{getTotal().toFixed(2)}</h3>

        <button
          onClick={clearCart}
          className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
