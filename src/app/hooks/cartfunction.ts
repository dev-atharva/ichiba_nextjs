import { create } from "zustand";

type CartStore = {
  cart: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (productId) =>
    set((state) => ({
      cart: [...state.cart, productId],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((id) => id !== productId),
    })),
}));
