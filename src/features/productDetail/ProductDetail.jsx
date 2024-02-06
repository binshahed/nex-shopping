import Rating from "../../components/productCard/Rating";
import { discountCalculator } from "../../utils/discountCalculator";

const ProductDetail = () => {
  const price = 99;
  const discountPercent = 12;
  const discountPrice = discountCalculator(price, discountPercent);
  return (
    <div>
      {/* basic detail  */}
      <div>
        <p className="text-3xl font-black">
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
            {discountPercent}%
          </span>
        </p>
        <p className="my-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <hr className="h-px my-8 bg-placeholder border-0" />
      {/* color  */}
      <div>
            <p className="text-lg ">Select Colors</p>
      </div>
    </div>
  );
};

export default ProductDetail;
