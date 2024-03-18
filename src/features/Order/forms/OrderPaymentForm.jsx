import BillingAddress from "./BillingAddressFrom";
import PlaceOrder from "../PlaceOrder";

import { useState } from "react";
const OrderPaymentForm = () => {
  const [next, setNext] = useState(false);
  return (
    <div className="p-4 md:p-10  bg-background2 shadow border border-gray-100 rounded-md">
      <p className="text-lg font-bold">Billing Details</p>
      {!next ? (
        <BillingAddress setNext={setNext} />
      ) : (
        <PlaceOrder setNext={setNext} />
      )}
    </div>
  );
};

export default OrderPaymentForm;
