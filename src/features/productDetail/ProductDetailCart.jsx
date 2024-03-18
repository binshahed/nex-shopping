/* eslint-disable react/prop-types */
import AddCart from "@/components/cart/AddCart";
import { addToCart } from "@/store/features/cart/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetailCart = ({ product }) => {
  const dispatch = useDispatch();
  console.log("psd", product);

  const handleCartAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 md:col-span-3  ">
          <AddCart product={product} />
        </div>
        <div className="col-span-8 ">
          <button className="basic-button" onClick={handleCartAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
