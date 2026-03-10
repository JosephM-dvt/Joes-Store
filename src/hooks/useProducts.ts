import { useGetProductsQuery } from "@/services/productsApi";

export function useProducts() {
  const { data, isLoading, error } = useGetProductsQuery();

  return {
    products: data ?? [],
    isLoading,
    error,
  };
}
