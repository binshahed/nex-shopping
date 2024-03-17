import { useGetCategoriesQuery } from "@/store/features/category/categoryApi";
import FilterSidebar from "./FilterSidebar";
import { useGetBrandsQuery } from "@/store/features/brand/brandApi";
import { useEffect, useState } from "react";
import { useGetFiltersProductsMutation } from "@/store/features/product/productApi";
import ProductCard from "@/components/productCard/ProductCard";
import LoadingPage from "@/components/global/Loading";

const Filter = () => {
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [getFiltersProducts, { data, isLoading }] =
    useGetFiltersProductsMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { data: brands } = useGetBrandsQuery();

  useEffect(() => {
    getFiltersProducts({
      filters: {
        brand: checkedBrands,
        category: checkedCategories,
      },
    });
  }, [checkedBrands, checkedCategories, getFiltersProducts]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* side ber  */}
      <FilterSidebar
        data={{ categories, brands }}
        states={{
          checkedBrands,
          setCheckedBrands,
          checkedCategories,
          setCheckedCategories,
        }}
      />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="border border-gray-500 rounded-lg p-4 col-span-12 md:col-span-9">
          <h1 className="mb-9">Products</h1>
          {products?.length === 0 ? (
            <div className="text-center text-lg font-bold">
              Product not found
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-4 place-items-center">
              {products?.map((product, index) => (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                  key={index}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
