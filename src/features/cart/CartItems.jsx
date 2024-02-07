import CartItem from "./CartItem";

const CartItems = () => {
    return (
        <div className="border border-gray1 shadow rounded-3xl p-5 mb-5">
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
};

export default CartItems;