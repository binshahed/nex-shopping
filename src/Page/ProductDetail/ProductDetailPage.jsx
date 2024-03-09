import { useParams } from "react-router-dom";
import ProductDetail from "@/features/productDetail/ProductDetail";
import ProductGallery from "@/features/productDetail/ProductGallery";
import ReviewCard from "@/features/review/ReviewCard";
import Subscribe from "@/features/subscribe/Subscribe";
import { useGetProductQuery } from "@/store/features/product/productApi";
import { useEffect } from "react";
import LoadingPage from "@/components/global/LoadingPage";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useGetProductQuery(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="container mx-auto">
      {/* product detail  */}
      <div className="my-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <ProductGallery />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ProductDetail product={data} />
          </div>
        </div>
      </div>
      {/* rating and reviews */}
      <hr className="h-px my-4 bg-gray1 border-0" />
      <div className="mb-10">
        <h1 className="text-2xl text-center font-bold py-10">
          Rating & Reviews
        </h1>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <ReviewCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReviewCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReviewCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReviewCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ReviewCard />
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default ProductDetailPage;
