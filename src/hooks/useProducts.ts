import type { Product } from "@/features/cart/cartTypes";

import { useGetProductsQuery } from "@/services/productsApi";

export function useProducts(): Product[] {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    throw new Promise(() => {});
  }

  if (error) {
    throw error;
  }

  return data as Product[];
}
