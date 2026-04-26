import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Products />
        </div>

        <div className="border-l">
          <Cart />
        </div>
      </div>
    </div>
  );
}
