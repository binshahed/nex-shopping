import CartItems from "../../features/cart/CartItems";
import CartSummary from "../../features/cart/CartSummary";
import Subscribe from "../../features/subscribe/Subscribe";

const CartPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold py-10">Your cart</h1>
      <div className="grid grid-cols-12 gap-5 mb-10">
        <div className="col-span-12 md:col-span-6">
          <CartItems />
        </div>
        <div className="col-span-12 md:col-span-6">
          <CartSummary />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default CartPage;
