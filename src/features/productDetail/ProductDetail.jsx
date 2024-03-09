/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Rating from "@/components/productCard/Rating";
import { discountCalculator } from "@/utils/discountCalculator";
import ProductDetailCart from "./ProductDetailCart";

import { useEffect } from "react";

const ProductDetail = ({ product }) => {
  const { name, discountPercentage, price } = product;

  const discountPrice = discountCalculator(price, discountPercentage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* basic detail  */}
      <div>
        <p className="text-2xl font-black">{name}</p>
        <Rating ratings="4" />
        <p>
          {" "}
          <span className="text-3xl font-bold  mr-2">${discountPrice}</span>
          <span className="font-bold text-xl text-placeholder line-through">
            ${price}
          </span>
          <span className=" text-lg ml-5 bg-red bg-opacity-10 px-5 py-1 rounded-xl text-red ">
            -{discountPercentage}%
          </span>
        </p>
        <p className="my-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <hr className="h-px my-4 bg-gray1 border-0" />
      {/* color  */}
      <div>
        <p className="text-lg text-placeholder ">Select Colors</p>
        <ul className="flex">
          <Link className="mr-2" to="/">
            <li className="p-4 bg-red rounded-full  border-primary border-2"></li>
          </Link>
          <Link to="/" className="mr-2">
            <li className="p-4 bg-primary rounded-full  border-primary border-2"></li>
          </Link>
          <Link to="/" className="mr-2">
            <li className="p-4 bg-white rounded-full  border-primary border-2"></li>
          </Link>
        </ul>
      </div>
      <hr className="h-px my-4 bg-gray1 border-0" />
      {/* Size  */}
      <div>
        <p className="text-lg text-placeholder ">Size</p>
        <button className="basic-button text-black bg-gray1 mr-2 mb-2 md:mb-0">
          Small
        </button>
        <button className="basic-button text-black bg-gray1 mr-2 mb-2 md:mb-0">
          Medium
        </button>
        <button className="basic-button text-black bg-gray1 mr-2 mb-2 md:mb-0">
          Large{" "}
        </button>
        <button className="basic-button text-black bg-gray1 mr-2 mb-2 md:mb-0">
          X-Large
        </button>
      </div>
      <hr className="h-px my-4 bg-gray1 border-0" />
      <ProductDetailCart product={product} />
    </div>
  );
};

export default ProductDetail;
