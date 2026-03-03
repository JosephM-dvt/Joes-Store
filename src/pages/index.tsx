import DefaultLayout from "@/layouts/default";
import { fetchProducts } from "@/services/api";

export default function IndexPage() {
  const products = fetchProducts();

  console.log(products);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center gap-6 text-center">
        <p>welcome to joes store</p>
      </div>
    </DefaultLayout>
  );
}
