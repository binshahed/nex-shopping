import { useParams } from "react-router-dom";
import ProductDetail from "@/features/productDetail/ProductDetail";
import ProductGallery from "@/features/productDetail/ProductGallery";
import {
  useGetPhotosQuery,
  useGetProductQuery,
} from "@/store/features/product/productApi";
import { useEffect } from "react";
import LoadingPage from "@/components/global/LoadingPage";
import ProductReview from "@/features/productDetail/ProductReview";
import PageLayout from "@/features/settings/PageLayout";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useGetProductQuery(productId);
  const { data: productImage } = useGetPhotosQuery(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <PageLayout>
      {/* product detail  */}
      <div className="my-10 bg-white shadow p-4 rounded-lg">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <ProductGallery productImage={productImage} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ProductDetail product={data} />
          </div>
        </div>
      </div>
      {/* rating and reviews */}

      <div className=" bg-white mx-auto justify-center align-middle p-8 rounded-lg shadow">
        <h1 className="text-2xl text-center font-bold py-10">
          Rating & Reviews
        </h1>
        <div className="grid grid-cols-12 gap-2 justify-center align-middle ">
          <ProductReview />
          <ProductReview />
          <ProductReview />
          <ProductReview />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetailPage;
