import { apiSlice } from "../api/apiSlice";
import { getProducts } from "./productSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(getProducts(result.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getPhotos: builder.query({
      query: (id) => ({
        url: `/product/photo/${id}`,
        responseHandler: (response) => response.url,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          return result;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetPhotosQuery, useGetProductQuery } =
  productApi;
