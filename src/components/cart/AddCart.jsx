/* eslint-disable react/prop-types */
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/features/cart/CartSlice";

const AddCart = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="flex justify-between rounded-full bg-gray1 p-2 px-4 ">
      <button
        className="cursor-pointer text-lg md:text-xl"
        onClick={handleRemoveFromCart}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        disabled
        type="text"
        value={product?.quantity}
        className="w-10 rounded-lg text-center bg-gray1 outline-none"
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
