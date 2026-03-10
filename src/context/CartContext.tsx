import { createContext, useContext, useReducer, ReactNode } from "react";

import { cartReducer, initialCartState } from "../cart/cartReducer";
import { CartState, CartAction } from "../types/cartTypes";

const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(
  null,
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCart(): CartState {
  const context = useContext(CartStateContext);

  if (!context) throw new Error("useCart must be used inside CartProvider");

  return context;
}

export function useCartDispatch(): React.Dispatch<CartAction> {
  const context = useContext(CartDispatchContext);

  if (!context)
    throw new Error("useCartDispatch must be used inside CartProvider");

  return context;
}
