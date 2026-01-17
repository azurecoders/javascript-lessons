import React from "react";

const Button = ({ text = "Default", disabled }) => {
  // text = "Register";
  return (
    <button
      disabled={disabled}
      className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-blue-400 transition-all duration-300 ease-in-out disabled:bg-gray-900"
    >
      {text}
    </button>
  );
};

export default Button;
