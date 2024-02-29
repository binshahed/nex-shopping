/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../components/buttons/Button";
import ProductCard from "../../../components/productCard/ProductCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const NewArrivals = ({ products }) => {
  const productsReverse= [...products].reverse()
  const initialShow = 4;
  const [countProduct, setCountProduct] = useState(initialShow);
  let someProducts = productsReverse.slice(0, countProduct);
  let show = productsReverse.length === someProducts.length ? false : true;

  return (
    <div className="container mx-auto mb-10 justify-center align-middle ">
      <h1 className="text-2xl text-center font-bold py-20">NEW ARRIVALS</h1>
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
      <div className="text-center">
        {show ? (
          <Button
            border
            handleButtonClick={() => setCountProduct(countProduct + 4)}
          >
            <span className="font-bold  ">
              View All <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </Button>
        ) : (
          <Button border handleButtonClick={() => setCountProduct(initialShow)}>
            <span className="font-bold">
              Hide <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
