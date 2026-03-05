import { Route, Routes } from "react-router-dom";

import { CartProvider } from "@/context/CartContext";
import { UIProvider } from "@/context/UIContext";
import IndexPage from "@/pages/index";
import CartPage from "@/pages/cart";

function App() {
  return (
    <UIProvider>
      <CartProvider>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<CartPage />} path="/cart" />
        </Routes>
      </CartProvider>
    </UIProvider>
  );
}

export default App;
