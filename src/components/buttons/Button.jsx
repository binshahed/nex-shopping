/* eslint-disable react/prop-types */

const Button = ({ children, bg, text, handleButtonClick, styles }) => {
  return (
    <button
      onClick={handleButtonClick}
      className={`bg-${bg || "white"} text-${
        text || "primary"
      } ${styles} p-2  px-8 rounded-3xl text-center  hover:bg-gray-500 ${"transition delay-150 hover:text-white"}`}
    >
      {children}
    </button>
  );
};

export default Button;
