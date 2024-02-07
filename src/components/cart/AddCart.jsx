import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddCart = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="flex justify-between rounded-full bg-gray1 p-2 px-4 ">
      <a
        className="cursor-pointer text-lg md:text-xl"
        onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </a>
      <input
        type="text"
        value={cartCount}
        onChange={(e) => setCartCount(e.target.value)}
        className="w-10 rounded-lg text-center bg-gray1 outline-none"
      />
      <a
        className="cursor-pointer text-lg md:text-xl"
        onClick={() => setCartCount(cartCount + 1)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </a>
    </div>
  );
};

export default AddCart;
