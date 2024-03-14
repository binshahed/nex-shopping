/* eslint-disable react/prop-types */

const OrderSummery = ({ product }) => {
  const totalProductPrice = product?.items.reduce((prev, crr) => {
    return prev + crr.productPrice;
  }, 0);

  const shippingPrice = 15;

  const grandTotalPrice = totalProductPrice + shippingPrice;
  return (
    <>
      <p className="text-lg font-bold">Order Summary</p>
      <div className="mt-5 ">
        <div className="flex mb-2">
          <p className="flex-1 text-placeholder text-lg">Subtotal</p>
          <p className="flex-2 font-bold text-lg">${totalProductPrice}</p>
        </div>

        <div className="flex mb-2 border-b pb-5 border-gray1 ">
          <p className="flex-1 text-placeholder text-lg">Delivery Fee</p>
          <p className="flex-2 font-bold text-lg">${shippingPrice}</p>
        </div>
        <div className="flex mb-10">
          <p className="flex-1  text-lg">Total Amount</p>
          <p className="flex-2 font-bold text-lg">${grandTotalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default OrderSummery;
