import { useForm } from "react-hook-form";
import { useAddProductsMutation } from "@/store/features/product/productApi";
import useToast from "@/hooks/useTostMessage";
import { useState } from "react";
import { useGetCategoriesQuery } from "@/store/features/category/categoryApi";
import { useGetBrandsQuery } from "@/store/features/brand/brandApi";

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
          <label className="custom-label">
            Product Name
          </label>
          <input
            name="name"
            type="text"
            className="custom-input"
            placeholder="Enter Product Name"
            required
            {...register("name")}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="custom-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="custom-input"
            placeholder="Enter Product Description"
            required
            {...register("description")}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="custom-label">
            Product Price
          </label>
          <input
            type="number"
            name="price"
            className="custom-input"
            placeholder="Enter Product Price"
            required
            {...register("price")}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="custom-label">
            Stock Quantity
          </label>
          <input
            type="number"
            name="name"
            className="custom-input"
            placeholder="Enter Product Quantity"
            required
            {...register("stockQuantity")}
          />
        </div>
        <div className="relative z-0 w-full mb-5  group">
          <label className="custom-label">
            Category
          </label>
          <select
            name="category"
            className="custom-input"
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
        </div>
        <div className="relative z-0 w-full mb-5  group">
          <label className="custom-label">Brand</label>
          <select
            name="brand"
            className="custom-input"
            required
            {...register("brand")}
            onChange={(e) => setBrandData(e.target.value)}
          >
            {/* Placeholder option */}
            <option value="" selected>
              Select a Brand
            </option>

            {isBrandLoading ? (
              <option disabled>Brand Loading...</option>
            ) : (
              brands?.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label className="custom-label">Photo URL</label>
          <input
            type="file"
            name="name"
            className="custom-input"
            placeholder=" "
            required
            {...register("photoUrl")}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
