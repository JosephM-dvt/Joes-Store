import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

import { useProducts } from "../hooks/useProducts";
import { useCartDispatch } from "../cart/CartContext";

export default function ProductList() {
  const products = useProducts();
  const dispatch = useCartDispatch();

  return (
    <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="p-3 flex flex-col">
          <Image
            alt={product.title}
            className="h-32 object-contain"
            src={product.image}
          />

          <p className="text-sm line-clamp-2 mt-2">{product.title}</p>

          <p className="font-bold mt-1">R{product.price.toFixed(2)}</p>

          <Button
            className="mt-auto"
            color="primary"
            onPress={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
}
