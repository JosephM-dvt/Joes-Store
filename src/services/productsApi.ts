import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiProduct, Product } from "@/features/cart/cartTypes";

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

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      transformResponse: (response: ApiProduct[]) => {
        return response.map(mapProduct);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
