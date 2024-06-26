import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { motion } from "framer-motion";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useGetBrandsQuery } from "@/store/features/brand/brandApi";
import { Link } from "react-router-dom";
import SpinnerLg from "@/components/global/SpinnerLg";

const BrandCarousel = () => {
  const { data, isLoading } = useGetBrandsQuery();

  return (
    <>
      {isLoading ? (
        <SpinnerLg />
      ) : (
        <motion.div
          className="bg-primary py-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto">
            <Swiper
              autoplay={{ delay: 3000 }}
              slidesPerView={8}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
            >
              {data?.map((brand) => (
                <SwiperSlide key={brand._id}>
                  <Link to="/filter" className="text-white font-black text-xl">
                    {brand.name}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default BrandCarousel;
