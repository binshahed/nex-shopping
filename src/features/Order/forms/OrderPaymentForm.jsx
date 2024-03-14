import BillingAddress from "./BillingAddressFrom";
import PlaceOrder from "../PlaceOrder";
import "../billingForm.css";
const OrderPaymentForm = () => {
  return (
    <div className="p-4 md:p-10 border border-gray1 rounded-md">
      <p className="text-lg font-bold">Billing Details</p>
      <BillingAddress />
      <PlaceOrder />
    </div>
  );
};

export default OrderPaymentForm;
