/* eslint-disable react/prop-types */
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const PlaceOrder = ({ setNext }) => {
  const [selectedOption, setSelectedOption] = useState("CashOnDelivery");

  // Function to handle radio button selection
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="md:flex md:items-start py-5  ">
        <div className="md:w-full text-start">
          <button
            className="   focus:outline-none text-purple-500 font-bold "
            type="submit"
            onClick={() => setNext(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back To Edit
          </button>
        </div>
      </div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Select Payment
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value="CashOnDelivery"
              onChange={handleRadioChange}
              name="list-radio"
              checked={selectedOption === "CashOnDelivery"}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-id"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cash On Delivery
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-military"
              type="radio"
              value="MobileBanking"
              onChange={handleRadioChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-military"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mobile Banking
            </label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value="CardPayment"
              onChange={handleRadioChange}
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-passport"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Card Payment
            </label>
          </div>
        </li>
      </ul>
      <div className="md:flex md:items-end mt-8">
        <div className="md:w-full text-end">
          <button
            className="shadow bg-purple-500 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={() => setNext(true)}
          >
            Save Detail And Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
