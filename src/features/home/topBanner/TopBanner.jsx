import bannerImg from "@/assets/banner/model2.png";
import Button from "@/components/buttons/Button";

const TopBanner = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto flex items-center justify-center ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-12 md:col-span-7">
            <div className="">
              <h1 className="text-7xl font-black pt-40">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="md:pr-40 mb-4">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <Button bg="primary" text="white">
                Shop Now
              </Button>
            </div>
            <div className="grid grid-cols-12 mt-4">
              <div className="col-span-4 ">
                <p className="text-2xl font-bold">200+</p>
                <p>International Brands</p>
              </div>
              <div className="col-span-4">
                <p className="text-2xl font-bold">2,000+</p>
                <p>International Brands</p>
              </div>
              <div className="col-span-4">
                <p className="text-2xl font-bold">30,000+</p>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5">
            <div className="relative">
              <img src={bannerImg} alt="" className="w-full h-auto bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
