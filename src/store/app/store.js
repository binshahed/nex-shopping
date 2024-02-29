import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import productSlice from "../features/product/productSlice";



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    product: productSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
