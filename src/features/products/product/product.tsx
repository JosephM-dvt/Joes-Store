import type { Product } from "@/features/cart/cartTypes";

import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";

import { useProducts } from "@/hooks/useProducts";
import DefaultLayout from "@/layouts/default";
import CartSummary from "@/features/cart/CartSummary";
import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/features/cart/cartSlice";

function Product() {
  const { products, isLoading, error } = useProducts();

  const { id } = useParams();
  const dispatch = useAppDispatch();

  if (isLoading)
    return (
      <div>
        <Spinner />{" "}
      </div>
    );
  if (error) return <div>Error loading product</div>;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-end mb-4">
        <CartSummary />
        <div className="w-full mt-6">
          <Card className="grid gap-6 md:grid-cols-2 p-4">
            <CardBody className="flex justify-center items-center">
              <Image
                alt={product.title}
                className="object-contain max-h-[400px]"
                src={product.image}
              />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-4">
              <h1 className="text-2xl font-bold">{product.title}</h1>

              <p className="text-default-500">{product.category}</p>

              <p className="text-default-600">{product.description}</p>

              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">
                  R{product.price.toFixed(2)}
                </span>
                <span className="text-sm text-default-500">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              <Button
                className="w-full sm:w-auto"
                color="primary"
                size="lg"
                onPress={() => {
                  dispatch(addToCart(product));
                }}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Product;
