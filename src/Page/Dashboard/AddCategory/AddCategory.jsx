import useToast from "@/hooks/useTostMessage";
import { useAddCategoryMutation } from "@/store/features/category/categoryApi";
import { useEffect, useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { showToast } = useToast();
  const [
    addCategory,
    {
      data: categoryData,
      isError: isCategoryError,
      error: categoryError,
      isLoading: isCategoryLoading,
    },
  ] = useAddCategoryMutation();

  const handleCategorySubmit = () => {
    if (categoryName) {
      addCategory({ name: categoryName });
    }
  };

  useEffect(() => {
    // Handle category success/error
    if (isCategoryError) {
      showToast(categoryError?.data, "error");
    } else if (categoryData) {
      showToast(categoryData.message, "success");
    }
  }, [isCategoryError, categoryData, showToast, categoryError]);
  return (
    <div className="py-20">
      <div className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <label className="custom-label">Category Name</label>
          <input
            type="text"
            name="categoryName"
            value={categoryName}
            className="custom-input"
            placeholder="Enter category"
            required
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <button
          onClick={handleCategorySubmit}
          disabled={isCategoryLoading}
          type="submit"
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
