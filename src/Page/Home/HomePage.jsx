import DressStyle from "../../features/home/dressStyle/DressStyle";
import BrandCarousel from "../../features/home/brandCarousel/BrandCarousel ";

import NewArrivals from "../../features/home/newArrivals/NewArrivals";
import ReviewCarousel from "../../features/review/ReviewCarousel";
import TopBanner from "../../features/home/topBanner/TopBanner";
import TopSelling from "../../features/home/topSelling/TopSelling";
import Subscribe from "../../features/subscribe/Subscribe";
const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <BrandCarousel />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <ReviewCarousel />

      <Subscribe />
    </div>
  );
};

export default HomePage;
