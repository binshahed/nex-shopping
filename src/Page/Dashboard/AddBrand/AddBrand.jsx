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
          <label className="custom-label">Brand Name</label>
          <input
            required
            type="text"
            name="brandName"
            value={brandName}
            className="custom-input"
            placeholder="Enter brand name"
            onChange={(e) => setBrandName(e.target.value)}
          />
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
