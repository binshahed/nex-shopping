const cubeSize = 55;
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center left-1/2 top-1/2 -mt-20 h-screen w-screen">
      <p className="text-center text-gray-600">Loading</p>
      <div className="animated-cube-parent mx-auto flex  h-60 w-60 items-center justify-center">
        <div className="cube-platform mt-24 flex  items-center justify-center">
          <div
            id="top-flap-left"
            style={{
              width: cubeSize * 0.55,
              height: cubeSize,
            }}
          />
          <div
            id="top-flap-right"
            style={{
              width: cubeSize * 0.48,
              height: cubeSize,
            }}
          />
          <div
            id="top-flap-bottom"
            style={{
              height: cubeSize * 0.55,
              width: cubeSize,
            }}
          />
          <div
            id="top-flap-top"
            style={{
              height: cubeSize * 0.48,
              width: cubeSize,
            }}
          />
          <div
            id="left-face-back"
            style={{
              width: cubeSize,
              height: cubeSize,
              transformOrigin: `bottom center`,
              transform: `rotateX(-270deg) translateZ(55px) scaleY(-1) translateY(100%)`,
            }}
          />
          <div
            id="left-face-back"
            style={{
              width: cubeSize,
              height: cubeSize,
              transformOrigin: `bottom center`,
              transform: `rotateX(-270deg) translateZ(0px) scaleY(-1) translateY(100%)`,
            }}
          />
          <div
            id="right-face-front"
            style={{
              width: cubeSize,
              height: cubeSize,
              transformOrigin: "right center",
              transform: `rotateY(270deg) translateZ(0px)`,
            }}
          />
          <div
            id="right-face-back"
            style={{
              width: cubeSize,
              height: cubeSize,
              transformOrigin: "right center",
              transform: `rotateY(270deg) translateZ(${cubeSize}px)`,
            }}
          />
          <div
            className="bg-gray1"
            style={{
              width: cubeSize,
              height: cubeSize,
              transform: `translateZ(-${cubeSize}px) translateX(40px) scale(1.2) translateY(35px)`,
              filter: "blur(8px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
