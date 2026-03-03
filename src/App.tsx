import { Route, Routes } from "react-router-dom";

import { CartProvider } from "@/cart/CartContext";
import IndexPage from "@/pages/index";
import CartPage from "@/pages/cart";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>
    </CartProvider>
  );
}

export default App;
