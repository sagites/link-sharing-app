import React from "react";

const ButtonPrimary = ({ label, onClick, type = "button", className}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 button text-Body-M active:bg-lightPurple disabled:bg-lighterPurple text-white bg-purple cursor-pointer rounded-xl ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
