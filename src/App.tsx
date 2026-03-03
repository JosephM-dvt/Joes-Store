import { Route, Routes } from "react-router-dom";

import { CartProvider } from "@/cart/CartContext";
import IndexPage from "@/pages/index";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
      </Routes>
    </CartProvider>
  );
}

export default App;
