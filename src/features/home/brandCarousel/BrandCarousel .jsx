import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "@/assets/brandLogo/Group.png";
import logo2 from "@/assets/brandLogo/gucci-logo.png";
import logo3 from "@/assets/brandLogo/prada-logo.png";
import logo4 from "@/assets/brandLogo/Vector.png";
import logo5 from "@/assets/brandLogo/zara-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const BrandCarousel = () => {
  return (
    <div className="bg-primary py-10 ">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={logo1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BrandCarousel;
