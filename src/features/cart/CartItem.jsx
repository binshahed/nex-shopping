/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCart from "@/components/cart/AddCart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetPhotosQuery } from "@/store/features/product/productApi";
import { discountCalculator } from "@/utils/discountCalculator";
import { useDispatch } from "react-redux";
import { deleteItemFromCare } from "@/store/features/cart/CartSlice";
const CartItem = ({ product }) => {
  const { data: productImage } = useGetPhotosQuery(product?._id);

  const dispatch = useDispatch();

  const handleDeleteProductFromCart = () => {
    dispatch(deleteItemFromCare(product?._id));
  };
  return (
    <div className="border-b border-gray-100  last:border-b-0 py-5">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3 ">
          <img
            src={productImage}
            className="rounded-lg border border-gray-500"
            alt=""
          />
        </div>
        <div className="col-span-5 md:col-span-6">
          <p className="text-xl font-bold text">{product.name}</p>
          <div className="my-3">
            <p className="text-sm text-gray-500">
              <span>Size: </span>Large
            </p>
            <p className="text-sm text-gray-500">
              <span>Color: </span>White
            </p>
          </div>
          <div>
            <p className="font-light">
              {product?.quantity} X{" "}
              {discountCalculator(product?.price, product?.discountPercentage)}
            </p>
            <p className=" font-bold">{product.productPrice}</p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="flex flex-col justify-between h-full">
            <p className="text-right text-xl text-red-600">
              <FontAwesomeIcon
                className="cursor-pointer"
                onClick={handleDeleteProductFromCart}
                icon={faTrash}
              />
            </p>
            <AddCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
