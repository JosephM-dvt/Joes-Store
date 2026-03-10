import DefaultLayout from "@/layouts/default";
import ProductList from "@/features/products/ProductList";
import CartSummary from "@/features/cart/CartSummary";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Welcome to Joe&apos;s Store
        </h1>
        <CartSummary />
        <ProductList />
      </div>
    </DefaultLayout>
  );
}
