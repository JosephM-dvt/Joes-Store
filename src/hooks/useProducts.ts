import type { Product } from "@/types/cartTypes";

import { fetchProducts } from "@/services/api";

type Status = "pending" | "success" | "error";

let status: Status = "pending";
let result: Product[] | Error;
let promise: Promise<void> | null = null;

function load() {
  if (!promise) {
    promise = fetchProducts()
      .then((data) => {
        status = "success";
        result = data;
      })
      .catch((err: Error) => {
        status = "error";
        result = err;
      });
  }
}

export function useProducts(): Product[] {
  load();

  if (status === "pending") {
    throw promise;
  }

  if (status === "error") {
    throw result;
  }

  return result as Product[];
}
