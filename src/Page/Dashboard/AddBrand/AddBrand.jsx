import useToast from "@/hooks/useTostMessage";
import { useAddBrandMutation } from "@/store/features/brand/brandApi";
import { useEffect, useState } from "react";

const AddBrand = () => {
  const [brandName, setBrandName] = useState("");

  const [addBrand, { data, isError, error, isLoading }] = useAddBrandMutation();

  const { showToast } = useToast();

  const handleBrandSubmit = () => {
    if (brandName) {
      addBrand({ name: brandName });
    }
  };

  useEffect(() => {
    // Handle brand success/error

    if (isError) {
      showToast(error?.data, "error");
    } else if (data) {
      showToast(data?.message, "success");
    }
  }, [isError, data, showToast, error]);

  return (
    <div className="py-20">
      <div className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            required
            type="text"
            name="brandName"
            value={brandName}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setBrandName(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Brand Name
          </label>
        </div>

        <button
          disabled={isLoading}
          onClick={handleBrandSubmit}
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBrand;
