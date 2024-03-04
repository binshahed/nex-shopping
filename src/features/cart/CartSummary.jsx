/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/buttons/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CartSummary = ({ product }) => {
  const totalProductPrice = product?.items.reduce((prev, crr) => {
    return prev + crr.productPrice;
  }, 0);

  const shippingPrice = 15;

  const grandTotalPrice = totalProductPrice + shippingPrice;

  return (
    <div className="shadow rounded-3xl p-5 mb-5">
      <p className="text-2xl font-bold">Order Summary</p>
      <div className="mt-5 ">
        <div className="flex mb-2">
          <p className="flex-1 text-placeholder text-lg">Subtotal</p>
          <p className="flex-2 font-bold text-lg">${totalProductPrice}</p>
        </div>
        {/* <div className="flex mb-2">
          <p className="flex-1 text-placeholder text-lg">Discount (-20%)</p>
          <p className="flex-2 font-bold text-lg">-$113</p>
        </div> */}
        <div className="flex mb-2 border-b pb-5 border-gray1 ">
          <p className="flex-1 text-placeholder text-lg">Delivery Fee</p>
          <p className="flex-2 font-bold text-lg">${shippingPrice}</p>
        </div>
        <div className="flex mb-10">
          <p className="flex-1  text-lg">Total</p>
          <p className="flex-2 font-bold text-lg">${grandTotalPrice}</p>
        </div>
      </div>
      <Button bg="primary" text="white" styles="w-full">
        Go to Checkout <FontAwesomeIcon icon={faArrowRight} />{" "}
      </Button>
    </div>
  );
};

export default CartSummary;
