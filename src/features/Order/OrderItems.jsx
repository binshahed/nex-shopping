/* eslint-disable react/prop-types */
import { useGetPhotosQuery } from "@/store/features/product/productApi";
import { discountCalculator } from "@/utils/discountCalculator";

const OrderItems = ({ product }) => {
  const { data: productImage } = useGetPhotosQuery(product?._id);
  return (
    <div className="border-b border-gray1  last:border-b-0 py-5">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-3 ">
          <img
            src={productImage}
            className="rounded-lg border  border-gray1"
            alt=""
          />
        </div>
        <div className="col-span-5 md:col-span-6">
          <p className="text-lg font-bo text">{product.name}</p>

          <div>
            <p className="font-bold text-purple">
              {product?.quantity} X $
              {discountCalculator(product?.price, product?.discountPercentage)}{" "}
              {product.discountPercentage === 0 && (
                <span className="font-bold text-placeholder line-through ml-2">
                  ${product?.price}
                </span>
              )}
            </p>
            <p className=" font-bold">${product.productPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
