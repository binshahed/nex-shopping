import { discountCalculator } from "./discountCalculator";
export const totalPricePerProduct = (cartProduct, action) =>
  parseFloat(
    cartProduct.quantity *
      discountCalculator(
        action.payload.price,
        action.payload.discountPercentage
      )
  );

export const setLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const cartTotalPrice = (state) => {
  const totalPrice = state?.items?.reduce((prv, curr) => {
    return prv + curr.productPrice;
  }, 0);
  return totalPrice;
};

export const cartItems = JSON.parse(localStorage.getItem("cart"));
