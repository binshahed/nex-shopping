import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/buttons/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CartSummary = () => {
  return (
    <div className="shadow rounded-3xl p-5 mb-5">
      <p className="text-2xl font-bold">Order Summary</p>
      <div className="mt-5 ">
        <div className="flex mb-2">
          <p className="flex-1 text-placeholder text-lg">Subtotal</p>
          <p className="flex-2 font-bold text-lg">$565</p>
        </div>
        <div className="flex mb-2">
          <p className="flex-1 text-placeholder text-lg">Discount (-20%)</p>
          <p className="flex-2 font-bold text-lg">-$113</p>
        </div>
        <div className="flex mb-2 border-b pb-5 border-gray1 ">
          <p className="flex-1 text-placeholder text-lg">Delivery Fee</p>
          <p className="flex-2 font-bold text-lg">$15</p>
        </div>
        <div className="flex mb-10">
          <p className="flex-1  text-lg">Total</p>
          <p className="flex-2 font-bold text-lg">$467</p>
        </div>
      </div>
      <Button bg="primary" text="white" styles="w-full">
        Go to Checkout <FontAwesomeIcon icon={faArrowRight} />{" "}
      </Button>
    </div>
  );
};

export default CartSummary;
