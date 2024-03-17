import DressStyleCard from "./DressStyleCard";
import casual from "@/assets/dressStyle/Casual.png";
import formal from "@/assets/dressStyle/formal.png";
import party from "@/assets/dressStyle/party.png";
import gym from "@/assets/dressStyle/gym.png";

const DressStyle = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 rounded-xl p-10">
        <h1 className="text-2xl text-center font-bold pb-10">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-12  gap-8">
          <div className="col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5">
            <DressStyleCard name="Casual" img={casual} />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7">
            <DressStyleCard name="Formal" img={formal} />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7">
            <DressStyleCard name="Party" img={party} />
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5">
            <DressStyleCard name="Gym" img={gym} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
