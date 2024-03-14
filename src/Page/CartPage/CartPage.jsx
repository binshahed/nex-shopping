import { useSelector } from "react-redux";

import CartSummary from "@/features/cart/CartSummary";
import Subscribe from "@/features/subscribe/Subscribe";
import CartItem from "@/features/cart/CartItem";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold py-10">Your cart</h1>
      {cart?.items.length === 0 ? (
        <div className="h-80">
          <p className="text-center text-2xl text-red">
            No Items found in you cart
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-5 mb-10">
          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray1  rounded-lg p-5 mb-5">
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
      <Subscribe />
    </div>
  );
};

export default CartPage;
