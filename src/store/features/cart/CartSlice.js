import { createSlice } from "@reduxjs/toolkit";
import { discountCalculator } from "@/utils/discountCalculator";
import {
  cartTotalPrice,
  setLocalStorage,
  totalPricePerProduct,
  cartItems,
} from "@/utils/cartCommonFunc";

// initial state
const initialState = {
  items: cartItems?.items || [],
  user: undefined,
  token: undefined,
  totalPrice: cartTotalPrice(cartItems) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartProduct = state.items.find(
        (product) => product?._id === action.payload?._id
      );
      // if product not exist
      if (!cartProduct) {
        const cartPd = {
          ...action.payload,
          quantity: 1,
          productPrice: parseFloat(
            discountCalculator(
              action.payload.price,
              action.payload.discountPercentage
            )
          ),
        };
        state.items.push(cartPd);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }
      // if product exist
      else {
        cartProduct.quantity++;
        // single product total price
        cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }
    },

    removeFromCart: (state, action) => {
      const cartProduct = state.items.find(
        (product) => product?._id === action.payload?._id
      );

      // if cart item = 0 then remove from cart
      if (cartProduct.quantity === 1) {
        state.items = state.items.filter(
          (product) => product._id !== action.payload._id
        );
        cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }
      // if cart item more then 1 remove quantity
      else {
        cartProduct.quantity--;
        cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }

      state.totalPrice = cartTotalPrice(state);
    },

    deleteItemFromCare: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );
      setLocalStorage(state);
      state.totalPrice = cartTotalPrice(state);
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCare } =
  cartSlice.actions;
export default cartSlice.reducer;
