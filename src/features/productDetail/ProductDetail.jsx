import { Link } from "react-router-dom";
import Rating from "../../components/productCard/Rating";
import { discountCalculator } from "../../utils/discountCalculator";
import Button from "../../components/buttons/Button";
import ProductDetailCart from "./ProductDetailCart";

const ProductDetail = () => {
  const price = 99;
  const discountPercent = 12;
  const discountPrice = discountCalculator(price, discountPercent);
  return (
    <div>
      {/* basic detail  */}
      <div>
        <p className="text-2xl font-black">
          High-performance smartphone with advanced features
        </p>
        <Rating ratings="4" />
        <p>
          {" "}
          <span className="text-3xl font-bold text-primary mr-2">
            ${discountPrice}
          </span>
          <span className="font-bold text-xl text-placeholder line-through">
            ${price}
          </span>
          <span className=" text-lg ml-5 bg-red bg-opacity-10 px-5 py-1 rounded-xl text-red ">
            -{discountPercent}%
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
        <Button bg="gray1" styles="mr-2 mb-2 md:mb-0">
          Small
        </Button>
        <Button bg="gray1" styles="mr-2 mb-2 md:mb-0">
          Medium
        </Button>
        <Button bg="gray1" styles="mr-2 mb-2 md:mb-0">
          Large
        </Button>
        <Button bg="gray1" styles="mr-2 mb-2 md:mb-0">
          X-Large
        </Button>
      </div>
      <hr className="h-px my-4 bg-gray1 border-0" />
      <ProductDetailCart />
    </div>
  );
};

export default ProductDetail;
