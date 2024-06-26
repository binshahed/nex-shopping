import OrderPaymentForm from "@/features/Order/forms/OrderPaymentForm";
import OrderProductList from "@/features/Order/OrderProductList";
import OrderSummery from "@/features/Order/OrderSummery";
import PageLayout from "@/features/settings/PageLayout";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <PageLayout>
      <h1 className="text-4xl text-center font-bold py-5">Place Your Order</h1>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 md:col-span-5">
          <div className=" border-gray-100 rounded-md p-4 md:p-10 mb-5">
            <OrderSummery product={cart} />
            <OrderProductList product={cart} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 ">
          <OrderPaymentForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default OrderPage;
