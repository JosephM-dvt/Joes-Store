import { Route, Routes } from "react-router-dom";
import { ScrollShadow } from "@heroui/scroll-shadow";

import { CartProvider } from "@/context/CartContext";
import { UIProvider } from "@/context/UIContext";
import IndexPage from "@/pages/index";
import CartPage from "@/pages/cart";
import Product from "@/pages/product/product";

function App() {
  return (
    <UIProvider>
      <CartProvider>
        <ScrollShadow>
          <Routes>
            <Route element={<IndexPage />} path="/" />
            <Route element={<CartPage />} path="/cart" />
            <Route element={<Product />} path="/product/:id" />
          </Routes>
        </ScrollShadow>
      </CartProvider>
    </UIProvider>
  );
}

export default App;
