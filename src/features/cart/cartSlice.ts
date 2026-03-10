import type { CartState, Product } from "@/features/cart/cartTypes";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    },

    removeFromCart: (state, action: PayloadAction<Product["id"]>) => {
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },

    increaseQuantity: (state, action: PayloadAction<Product["id"]>) => {
      return {
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    },

    decreaseQuantity: (state, action: PayloadAction<Product["id"]>) => {
      return {
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.value;
export default cartSlice.reducer;
