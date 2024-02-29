/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import noImg from "../../assets/products/no-photo.jpg";
import { discountCalculator } from "../../utils/discountCalculator";
import Button from "../buttons/Button";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../tooltip/Tooltip";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useGetPhotosQuery } from "../../store/features/product/productApi";
import useToast from "../../hooks/useTostMessage";

const ProductCard = ({ product }) => {
  const discountPrice = discountCalculator(
    product?.price,
    product?.discountPercentage
  );

  const { showToast } = useToast();

  const {
    data: productImage,
    isLoading,
    isError,
  } = useGetPhotosQuery(product?._id);

  if (isError) {
    showToast("Image not found", "error");
  }

  return (
    <Link to={`/product/${product?._id}`}>
      <div className="w-full max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-gray1">
        <img
          className="p-4 rounded-t-lg h-full "
          src={productImage}
          alt={isLoading && "image Loading..."}
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-primary">
            {product?.name}
          </h5>

          <Rating ratings={product?.ratings} />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-primary mr-2">
                ${discountPrice}
              </span>
              {product?.discountPercentage > 0 && (
                <span className="font-bold text-placeholder line-through">
                  ${parseFloat(product?.price)}
                </span>
              )}
            </div>
            <Tooltip message="Add to cart">
              <Button text="primary" bg="lightGray">
                <FontAwesomeIcon icon={faCartPlus} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
