import { Suspense } from "react";
import { Spinner } from "@heroui/spinner";

import DefaultLayout from "@/layouts/default";
import ProductList from "@/components/ProductList";
import CartSummary from "@/components/CartSummary";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Welcome to Joe&apos;s Store
        </h1>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh] w-full">
              <Spinner size="lg" />
            </div>
          }
        >
          <CartSummary />
          <ProductList />
        </Suspense>
      </div>
    </DefaultLayout>
  );
}
