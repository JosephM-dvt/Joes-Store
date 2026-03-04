import { ApiProduct, Product } from "../types/cartTypes";

function mapProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    price: apiProduct.price,
    image: apiProduct.image,
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=50");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ApiProduct[] = await res.json();

  return data.map(mapProduct);
}
