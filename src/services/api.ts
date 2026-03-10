import { ApiProduct, Product } from "../features/cart/cartTypes";

function mapProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    price: apiProduct.price,
    image: apiProduct.image,
    description: apiProduct.description,
    category: apiProduct.category,
    rating: {
      rate: apiProduct.rating.rate,
      count: apiProduct.rating.count,
    },
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ApiProduct[] = await res.json();

  return data.map(mapProduct);
}
