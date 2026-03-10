import { Card, Button, Image, Divider } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

import {
  selectCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeFromCart,
} from "./cartSlice";

import DefaultLayout from "@/layouts/default";
import { useAppSelector, useAppDispatch } from "@/app/hooks";

export default function CartPage() {
  const items = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {items.length === 0 && (
          <Card className="p-6 text-center">
            <p className="mb-4">Your cart is empty</p>
            <Button as={RouterLink} color="primary" to="/">
              Continue Shopping
            </Button>
          </Card>
        )}

        {items.length > 0 && (
          <>
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 flex flex-col sm:flex-row gap-4 items-center"
                >
                  <Image
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                    src={item.image}
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-semibold line-clamp-2">{item.title}</p>
                    <p className="text-primary font-bold">
                      R{item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="flat"
                      onPress={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </Button>

                    <span className="w-6 text-center">{item.quantity}</span>

                    <Button
                      size="sm"
                      variant="flat"
                      onPress={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </Card>
              ))}
            </div>

            <Divider />

            <Card className="p-6">
              <div className="flex flex-col gap-2">
                <p>Items: {totalItems}</p>
                <p className="text-xl font-bold">
                  Total: R{totalPrice.toFixed(2)}
                </p>

                <Button
                  className="mt-3"
                  color="primary"
                  size="lg"
                  onPress={() => dispatch(clearCart())}
                >
                  Checkout
                </Button>
              </div>
            </Card>
          </>
        )}
      </div>
    </DefaultLayout>
  );
}
