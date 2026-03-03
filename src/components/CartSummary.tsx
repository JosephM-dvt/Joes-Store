import { Card } from "@heroui/react";

import { useCart } from "../cart/CartContext";

export default function CartSummary() {
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Card className="p-4 m-3 sticky top-2">
      <h2 className="font-bold text-lg">Cart Summary</h2>
      <p>Items: {totalItems}</p>
      <p>Total: R{totalPrice.toFixed(2)}</p>
    </Card>
  );
}
