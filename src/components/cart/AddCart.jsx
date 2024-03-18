/* eslint-disable react/prop-types */
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/features/cart/CartSlice";

const AddCart = ({ product }) => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state?.cart?.items);

  const cartProduct = cartProducts.find((pd) => pd._id === product._id);

  const handleAddCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="flex justify-between rounded-full bg-gray-100 p-2 px-4 ">
      <button
        className="cursor-pointer text-lg md:text-xl"
        onClick={handleRemoveFromCart}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        disabled
        type="text"
        value={cartProduct?.quantity || 0}
        className="w-10 rounded-lg text-center bg-gray-100 outline-none"
      />

      <button
        className="cursor-pointer text-lg md:text-xl"
        onClick={handleAddCart}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddCart;
