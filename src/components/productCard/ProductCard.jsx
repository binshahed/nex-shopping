/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noImg from "../../assets/products/no-photo.jpg";
import { discountCalculator } from "../../utils/discountCalculator";
import Button from "../buttons/Button";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../tooltip/Tooltip";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const discountPrice = discountCalculator(product?.price, product?.discount);
  return (
    <Link to='/product/2'>
      <div className="w-full max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={noImg} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-primary">
              {product?.name}
            </h5>
          </a>
          <Rating ratings={product?.ratings} />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-primary mr-2">
                ${discountPrice}
              </span>
              <span className="font-bold text-placeholder line-through">
                ${product?.price}
              </span>
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
