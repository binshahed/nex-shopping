/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { discountCalculator } from "@/utils/discountCalculator";
import Button from "../buttons/Button";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../tooltip/Tooltip";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useGetPhotosQuery } from "@/store/features/product/productApi";
import useToast from "@/hooks/useTostMessage";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cart/CartSlice";

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
    isError,
  } = useGetPhotosQuery(product?._id);

  if (isError) {
    showToast("Image not found", "error");
  }

  const handleCartAdd = () => {
    dispatch(addToCart(product));
  };

  // const handleCartRemove = () => {
  //   dispatch(removeFromCart(product));
  // };

  return (
    <div className="w-full max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-gray1">
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
              <span className="font-bold text-placeholder line-through">
                ${parseFloat(product?.price)}
              </span>
            )}
          </div>

          <Tooltip message="Add to cart">
            <Button bg="lightGray" handleButtonClick={handleCartAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
