/* eslint-disable react/prop-types */

const DressStyleCard = ({ name, img }) => {
  return (
    <div className="bg-white rounded-2xl h-52 overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <p className="text-2xl font-black pt-14 pl-14">{name}</p>
        </div>
        <div className="col-span-6">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DressStyleCard;
