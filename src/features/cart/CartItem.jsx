import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productImg from "../../assets/products/product-1.jpg";
import AddCart from "../../components/cart/AddCart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartItem = () => {
  return (
    <div className="border-b border-gray1  last:border-b-0 py-5">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3 ">
          <img
            src={productImg}
            className="rounded-lg border border-placeholder"
            alt=""
          />
        </div>
        <div className="col-span-5 md:col-span-6">
          <p className="text-xl font-bold text">Wireless Headphones Pro</p>
          <div className="my-3">
            <p className="text-sm text-placeholder">
              <span className="text-primary">Size: </span>Large
            </p>
            <p className="text-sm text-placeholder">
              <span className="text-primary">Color: </span>White
            </p>
          </div>
          <p className="text-xl font-bold text">$256</p>
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="flex flex-col justify-between h-full">
            <p className="text-right text-xl text-red cursor-pointer">
              <FontAwesomeIcon icon={faTrash} />
            </p>
            <AddCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
