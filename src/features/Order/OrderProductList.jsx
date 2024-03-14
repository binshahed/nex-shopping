/* eslint-disable react/prop-types */

import CartItem from "../cart/CartItem";
import OrderItems from "./OrderItems";

const OrderProductList = ({ product }) => {
  return (
    <div>
      {product.items.map((product) => (
        <OrderItems key={product._id} product={product} />
      ))}
    </div>
  );
};

export default OrderProductList;
