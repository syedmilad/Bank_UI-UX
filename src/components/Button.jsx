import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`text-white px-6 py-4 bg-blue-gradient font-poppins font-medium text-black rounded-[6px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
