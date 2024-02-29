import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3001/api/v1";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { endpoint, getState }) => {
      // headers.set("Content-Type", "application/json");
      const token = getState()?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
