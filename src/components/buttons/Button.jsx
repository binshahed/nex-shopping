/* eslint-disable react/prop-types */

const Button = ({ children, bg, text, border, handleButtonClick }) => {
  return (
    <button
      onClick={handleButtonClick }
      className={`bg-${bg || "white"} text-${
        text || "primary"
      } p-2 px-8 rounded-3xl text-center my-5  hover:bg-placeholder ${
        border && "border transition delay-150 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
