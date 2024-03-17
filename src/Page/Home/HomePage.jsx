import DressStyle from "@/features/home/dressStyle/DressStyle";
import BrandCarousel from "@/features/home/brandCarousel/BrandCarousel ";

import NewArrivals from "@/features/home/newArrivals/NewArrivals";
import ReviewCarousel from "@/features/review/ReviewCarousel";
import TopBanner from "@/features/home/topBanner/TopBanner";
import TopSelling from "@/features/home/topSelling/TopSelling";
import Subscribe from "@/features/subscribe/Subscribe";
import { useGetProductsQuery } from "@/store/features/product/productApi";
import SpinnerLg from "@/components/global/SpinnerLg";
import useToast from "@/hooks/useTostMessage";

const HomePage = () => {
  const { showToast } = useToast();
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isError) {
    showToast(error.data, "error");
  }

  return (
    <div>
      <TopBanner />
      <BrandCarousel />

      {isLoading ? (
        <SpinnerLg />
      ) : isError ? (
        <h1 className="text-2xl text-red-600 py-10 text-center">{error?.error}</h1>
      ) : (
        <>
          <NewArrivals products={data} />
          <TopSelling products={data} />
        </>
      )}
      <DressStyle />
      <ReviewCarousel />

      <Subscribe />
    </div>
  );
};

export default HomePage;
