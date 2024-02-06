import Button from "../../components/buttons/Button";
import AddCart from "../../components/cart/AddCart";

const ProductDetailCart = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 md:col-span-3  rounded-full bg-gray1 p-2 px-4 ">
          <AddCart />
        </div>
        <div className="col-span-8 ">
          <Button bg="primary" text="white">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
