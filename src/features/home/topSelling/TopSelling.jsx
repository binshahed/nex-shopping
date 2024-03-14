/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopSelling = ({ products }) => {
  const initialShow = 4;
  const [countProduct, setCountProduct] = useState(initialShow);
  let someProducts = products.slice(0, countProduct);
  let show = products.length === someProducts.length ? false : true;
  return (
    <div className="container mx-auto mb-10 justify-center align-middle ">
      <h1 className="text-2xl text-center font-bold py-20">Top Selling</h1>
      <div className="grid grid-cols-12 gap-4 place-items-center">
        {someProducts.map((product, index) => (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            key={index}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {someProducts.length > initialShow && (
        <div className="text-center">
          {show ? (
            <button
              className="basic-button bg-transparent text-black border my-10 "
              onClick={() => setCountProduct(countProduct + 4)}
            >
              <span className="font-bold  ">
                View All <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </button>
          ) : (
            <button
              className="basic-button bg-transparent text-black border my-10 "
              onClick={() => setCountProduct(initialShow)}
            >
              <span className="font-bold  ">
                Hide <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TopSelling;
