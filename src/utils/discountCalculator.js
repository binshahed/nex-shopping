export const discountCalculator = (price, discountPercentage) => {
  return ((price * (100 - discountPercentage)) / 100).toFixed(2);
};
