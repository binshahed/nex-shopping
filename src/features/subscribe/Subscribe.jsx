import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/buttons/Button";

const Subscribe = () => {
  return (
    <div className="relative mb-[-70px] container mx-auto z-40">
      <div className="bg-primary text-white rounded-2xl p-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold text-center">
                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <form className=" w-full md:w-4/6 lg:w-4/6 mt-10 md:mt-0 lg:mt-0 mb-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="search"
                  className="outline-none block w-full p-2 pl-10 text-sm gray-500-text-gray-500 text-primary bg-gray-100  rounded-full bg-gray-50 focus:border-0 py-4"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </form>
            <Button styles="w-full md:w-4/6 lg:w-4/6 p-3">
              <span className="font-bold">Subscribe to Newsletter</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
