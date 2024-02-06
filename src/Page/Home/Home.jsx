import BrandCarousel from "../../features/brandCarosel/BrandCarousel ";
import MainNav from "../../features/nav/MainNav";
import TopNav from "../../features/nav/TopNav";
import NewArrivals from "../../features/newArrivals/NewArrivals";
import TopBanner from "../../features/topBanner/TopBanner";
import TopSelling from "../../features/topSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <TopNav />
      <MainNav />
      <TopBanner />
      <BrandCarousel />
      <NewArrivals />
      <TopSelling />
    </div>
  );
};

export default Home;
