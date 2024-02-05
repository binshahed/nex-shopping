import bannerImg from "../../assets/banner/banner-img.png";

const TopBanner = () => {
  return (
    <div className="bg-lightGray">
      <div className="container mx-auto flex items-center justify-center ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-12 md:col-span-7">
            <div className="">
              <h1 className="text-7xl font-black pt-40">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="bg-primary text-white p-2 px-8 rounded-3xl text-center mt-5">Shop Now</button>
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
