import { Route, Routes } from "react-router-dom";
import { ScrollShadow } from "@heroui/scroll-shadow";

import { UIProvider } from "@/context/UIContext";
import IndexPage from "@/pages/index";
import CartPage from "@/features/cart/cart";
import Product from "@/features/products/product/product";

function App() {
  return (
    <UIProvider>
      <ScrollShadow>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<Product />} path="/product/:id" />
        </Routes>
      </ScrollShadow>
    </UIProvider>
  );
}

export default App;
