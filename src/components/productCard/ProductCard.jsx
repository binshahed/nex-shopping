/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { discountCalculator } from "@/utils/discountCalculator";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../tooltip/Tooltip";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useGetPhotosQuery } from "@/store/features/product/productApi";
import useToast from "@/hooks/useTostMessage";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cart/CartSlice";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const discountPrice = discountCalculator(
    product?.price,
    product?.discountPercentage
  );

  const dispatch = useDispatch();

  const { showToast } = useToast();

  const {
    data: productImage,
    // isLoading,
    error,
    isError,
  } = useGetPhotosQuery(product?._id);

  if (isError) {
    showToast("Image not found", error);
  }

  const handleCartAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-full max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-gray-100"
    >
      <img
        className="p-4 rounded-t-lg h-full "
        src={productImage}
        alt="image Loading..."
      />

      <div className="px-5 pb-5">
        <Link to={`/product/${product?._id}`}>
          <h5 className="text-xl font-semibold tracking-tight ">
            {product?.name}
          </h5>
        </Link>
        <Rating ratings={product?.ratings} />

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold  mr-2">${discountPrice}</span>
            {product?.discountPercentage > 0 && (
              <span className="font-bold text-gray-500 line-through">
                ${parseFloat(product?.price)}
              </span>
            )}
          </div>

          <Tooltip message="Add to cart">
            <button
              className="basic-button bg-gray-200 text-primary"
              onClick={handleCartAdd}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
