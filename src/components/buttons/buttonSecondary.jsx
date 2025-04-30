import React from "react";

const ButtonSecondary = ({ label, onClick, type = "button", className}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 button text-Body-M bg-white  active:bg-lighterPurple text-purple  focus:ring-purple cursor-pointer disabled:text-lighterPurple disabled:ring-focus:ring disabled:ring-lighterPurple rounded-xl ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
