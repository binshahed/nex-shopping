import useToast from "@/hooks/useTostMessage";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from "@/store/features/category/categoryApi";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { data, isLoading } = useGetCategoriesQuery();
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
    if (isCategoryError) {
      showToast(categoryError?.data, "error");
    } else if (categoryData) {
      showToast(categoryData.message, "success");
    }
  }, [isCategoryError, categoryData, showToast, categoryError]);
  return (
    <div className=" container py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="max-w-md mx-auto w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md p-8">
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
        <div className="col-span-12 md:col-span-6">
          <div className="relative overflow-x-auto">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Category Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!data.length > 0 ? (
                    <p>No Data Found</p>
                  ) : (
                    data.map((category) => (
                      <tr
                        key={category._id}
                        className="bg-white border-b text-primary font-bold"
                      >
                        <td className="px-6 py-4">{category.name} </td>
                        <td className="px-6 py-4">
                          <FontAwesomeIcon
                            className="bg-primary p-2 text-lg rounded-md text-white cursor-pointer hover:bg-gray-700"
                            icon={faEdit}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
