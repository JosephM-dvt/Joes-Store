import { Suspense } from "react";

import DefaultLayout from "@/layouts/default";
import ProductList from "@/components/ProductList";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Welcome to Joe&apos;s Store
        </h1>

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductList />
        </Suspense>
      </div>
    </DefaultLayout>
  );
}
