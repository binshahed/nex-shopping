import useToast from "@/hooks/useTostMessage";
import {
  useAddBrandMutation,
  useGetBrandsQuery,
} from "@/store/features/brand/brandApi";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const AddBrand = () => {
  const [brandName, setBrandName] = useState("");
  const { data, isLoading } = useGetBrandsQuery();

  const [
    addBrand,
    {
      data: brandData,
      isError: isBrandError,
      error: brandError,
      isLoading: isBrandLoading,
    },
  ] = useAddBrandMutation();

  const { showToast } = useToast();

  const handleBrandSubmit = () => {
    if (brandName) {
      addBrand({ name: brandName });
    }
  };

  useEffect(() => {
    // Handle brand success/error

    if (isBrandError) {
      showToast(brandError?.data, "error");
    } else if (brandData) {
      showToast(brandData?.message, "success");
    }
  }, [isBrandError, brandData, showToast, brandError]);

  return (
    <div className=" container py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="max-w-md mx-auto w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md p-8">
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
              disabled={isBrandLoading}
              onClick={handleBrandSubmit}
              className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
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
                      Brand Name
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
                        <td className="px-6 py-4">{category.name}</td>
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

export default AddBrand;
