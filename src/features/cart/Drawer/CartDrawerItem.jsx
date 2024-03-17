/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { useGetPhotosQuery } from "@/store/features/product/productApi";
import { deleteItemFromCare } from "@/store/features/cart/CartSlice";
import AddCart from "@/components/cart/AddCart";
import { discountCalculator } from "@/utils/discountCalculator";

const CartDrawerItem = ({ product }) => {
  const dispatch = useDispatch();
  const { data: productImage } = useGetPhotosQuery(product?._id);
  const handleDeleteProductFromCart = () => {
    dispatch(deleteItemFromCare(product?._id));
  };
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={productImage}
          alt="img"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between  text-gray-900">
            <h3 className="font-medium">
              <a>{product?.name}</a>
            </h3>
            <p className="ml-4 font-light">
              {product?.quantity} X{" "}
              {discountCalculator(product?.price, product?.discountPercentage)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-right font-bold">{product.productPrice}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <AddCart product={product} />
          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-indigo-500"
              onClick={handleDeleteProductFromCart}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartDrawerItem;
