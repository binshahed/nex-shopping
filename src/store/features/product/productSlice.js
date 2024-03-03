import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        products: action.payload.products,
      };
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, getProducts } = productSlice.actions;

export default productSlice.reducer;
