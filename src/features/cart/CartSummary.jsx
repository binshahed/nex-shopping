/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartSummary = ({ product }) => {
  const totalProductPrice = product?.items.reduce((prev, crr) => {
    return prev + crr.productPrice;
  }, 0);

  const shippingPrice = 15;

  const grandTotalPrice = totalProductPrice + shippingPrice;

  return (
    <div className="border bg-background2 shadow border-gray-100 rounded-lg p-5 mb-5">
      <p className="text-2xl font-bold">Order Summary</p>
      <div className="mt-5 ">
        <div className="flex mb-2">
          <p className="flex-1 text-gray-500 text-lg">Subtotal</p>
          <p className="flex-2 font-bold text-lg">${totalProductPrice}</p>
        </div>
        {/* <div className="flex mb-2">
          <p className="flex-1 text-gray-500 text-lg">Discount (-20%)</p>
          <p className="flex-2 font-bold text-lg">-$113</p>
        </div> */}
        <div className="flex mb-2 border-b pb-5 border-gray-100 ">
          <p className="flex-1 text-gray-500 text-lg">Delivery Fee</p>
          <p className="flex-2 font-bold text-lg">${shippingPrice}</p>
        </div>
        <div className="flex mb-10">
          <p className="flex-1  text-lg">Total</p>
          <p className="flex-2 font-bold text-lg">${grandTotalPrice}</p>
        </div>
      </div>
      <Link to="/order" className="basic-button w-full block">
        Go to Checkout <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default CartSummary;
