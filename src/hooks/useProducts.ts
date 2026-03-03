import { fetchProducts } from "../services/api";
import { Product } from "../cart/types";

let productPromise: Promise<Product[]> | null = null;

export function useProducts(): Product[] {
  if (!productPromise) {
    productPromise = fetchProducts();
  }

  throw productPromise;
}
