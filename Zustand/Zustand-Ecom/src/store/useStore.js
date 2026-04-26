// src/store/useStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      products: [],
      cart: [],
      loading: false,

      // Fetch products
      fetchProducts: async () => {
        set({ loading: true });
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data, loading: false });
      },

      // Add to cart
      addToCart: (product) => {
        const cart = get().cart;
        const exists = cart.find((item) => item.id === product.id);

        if (exists) {
          set({
            cart: cart.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, qty: 1 }] });
        }
      },

      // Remove item
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      // Change quantity
      updateQty: (id, type) => {
        const cart = get().cart;

        set({
          cart: cart.map((item) => {
            if (item.id === id) {
              if (type === "inc") return { ...item, qty: item.qty + 1 };
              if (type === "dec" && item.qty > 1)
                return { ...item, qty: item.qty - 1 };
            }
            return item;
          }),
        });
      },

      // Clear cart
      clearCart: () => set({ cart: [] }),

      // Total
      getTotal: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
