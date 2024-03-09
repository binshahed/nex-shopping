import { apiSlice } from "./../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} = categoryApi;
