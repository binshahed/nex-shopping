import { apiSlice } from "../api/apiSlice";
import { userLoggedOut } from "../auth/authSlice";
import { getProducts } from "./productSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["products"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(getProducts(result.data));
        } catch (err) {
          if (err?.error?.originalStatus === 401) {
            dispatch(userLoggedOut());
          }
          console.log(err);
        }
      },
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          return result;
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
    getProductSearch: builder.mutation({
      query: (searchValue) => ({
        url: `/product/search?q=${searchValue}`,
        method: "POST",
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
    getFiltersProducts: builder.mutation({
      query: (data) => ({
        url: "/product/filter",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
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

export const {
  useGetProductsQuery,
  useGetPhotosQuery,
  useGetProductQuery,
  useAddProductsMutation,
  useGetFiltersProductsMutation,
  useGetProductSearchMutation,
} = productApi;
