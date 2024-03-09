import { apiSlice } from "./../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBrand: builder.mutation({
      query: (data) => ({
        url: "/brand",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    getBrands: builder.query({
      query: () => ({
        url: "/brand",
        method: "GET",
      }),
    }),
    getBrandById: builder.query({
      query: (id) => ({
        url: `/brand/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddBrandMutation, useGetBrandsQuery } = brandApi;
