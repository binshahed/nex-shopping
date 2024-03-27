import { useSelector } from "react-redux";

import CartSummary from "@/features/cart/CartSummary";
import CartItem from "@/features/cart/CartItem";
import PageLayout from "@/features/settings/PageLayout";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <PageLayout>
      <h1 className="text-4xl text-center font-bold py-10">Your cart</h1>
      {cart?.items.length === 0 ? (
        <div className="h-80">
          <p className="text-center text-2xl text-red">
            No Items found in you cart
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-5 ">
          <div className="col-span-12 md:col-span-6">
            <div className="border bg-background2 shadow border-gray-100  rounded-lg p-5 mb-5">
              {cart.items.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <CartSummary product={cart} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default CartPage;
