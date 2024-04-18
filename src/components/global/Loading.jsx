import SpinnerLg from "./SpinnerLg";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center left-1/2 top-1/2 -mt-20 h-screen w-screen bg-gradient-to-b from-slate-400 to-slate-50">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <SpinnerLg />

          <div className="text-3xl">Loading ...</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
