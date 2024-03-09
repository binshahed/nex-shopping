/* eslint-disable react/prop-types */
import AddCart from "@/components/cart/AddCart";

const ProductDetailCart = ({ product }) => {
  console.log('psd',product);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 md:col-span-3  ">
          <AddCart product={product} />
        </div>
        <div className="col-span-8 ">
          <button className="basic-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
