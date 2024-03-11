import { useForm } from "react-hook-form";
import { useAddProductsMutation } from "@/store/features/product/productApi";
import useToast from "@/hooks/useTostMessage";
import { useState } from "react";
import { useGetCategoriesQuery } from "@/store/features/category/categoryApi";
import { useGetBrandsQuery } from "@/store/features/brand/brandApi";
import "./appProduct.css";

const AddProduct = () => {
  const [categoryData, setCategoryData] = useState();
  const [brandData, setBrandData] = useState();
  const { register, handleSubmit } = useForm();
  const [addProducts, { data: productData, isError, error }] =
    useAddProductsMutation();

  const { data: categoryProducts, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();
  const { data: brands, isLoading: isBrandLoading } = useGetBrandsQuery();

  const { showToast } = useToast();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", categoryData);
    formData.append("brand", brandData);
    formData.append("stockQuantity", data.stockQuantity);
    formData.append("photoUrl", data.photoUrl[0]);
    // add product data
    addProducts(formData);
  };

  // error message
  if (isError) {
    showToast(error.data, "error");
  } else if (productData) {
    showToast(productData.message, "success");
  }

  return (
    <div className="py-20">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("name")}
          />
          <label className="from-level-animate">Product Name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("description")}
          />
          <label className="from-level-animate">description</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("price")}
          />
          <label className="from-level-animate">price</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("stockQuantity")}
          />
          <label className="from-level-animate">stockQuantity</label>
        </div>
        <div className="relative z-0 w-full mb-5 mt-10 group">
          <select
            name="category"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            {...register("category")}
            onChange={(e) => setCategoryData(e.target.value)}
          >
            {/* Placeholder option */}
            <option value="" selected>
              Select a category
            </option>

            {isCategoryLoading ? (
              <option disabled>Category Loading...</option>
            ) : (
              categoryProducts?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Category
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 mt-10 group">
          <select
            name="category"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            {...register("brand")}
            onChange={(e) => setBrandData(e.target.value)}
          >
            {/* Placeholder option */}
            <option value="" selected>
              Select a Brand
            </option>

            {isBrandLoading ? (
              <option disabled>Category Loading...</option>
            ) : (
              brands?.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))
            )}
          </select>
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Brands
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("photoUrl")}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            photoUrl
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
