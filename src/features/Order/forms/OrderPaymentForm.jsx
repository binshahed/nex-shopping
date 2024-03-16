import BillingAddress from "./BillingAddressFrom";
import PlaceOrder from "../PlaceOrder";

import { useState } from "react";
const OrderPaymentForm = () => {
  const [next, setNext] = useState(false);
  return (
    <div className="p-4 md:p-10 border border-gray1 rounded-md">
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
