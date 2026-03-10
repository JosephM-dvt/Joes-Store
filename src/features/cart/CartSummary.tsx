import { Card } from "@heroui/react";

import { AnimatedRGBBorder } from "../../components/animated-rgb-border";

import { selectCart } from "./cartSlice";

import { useAppSelector } from "@/app/hooks";

export default function CartSummary() {
  const items = useAppSelector(selectCart);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <AnimatedRGBBorder className="sticky top-15 z-10000">
      <Card className="p-4 ">
        <h2 className="font-bold text-lg">Cart Summary</h2>
        <p>Items: {totalItems}</p>
        <p>Total: R{totalPrice.toFixed(2)}</p>
      </Card>
    </AnimatedRGBBorder>
  );
}
