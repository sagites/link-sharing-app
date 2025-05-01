import React from "react";

const ButtonSecondary = ({
  label,
  onClick,
  imageSrc,
  type = "button",
  classNameButton,
  classNameLabel,
  classNameImage
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 button text-Body-M bg-white border border-purple active:bg-lighterPurple text-purple  focus:ring-purple cursor-pointer disabled:text-lighterPurple disabled:ring-focus:ring disabled:ring-lighterPurple rounded-lg hover:bg-lighterPurple ${classNameButton}`}
    >
      <img src={imageSrc} className={`${classNameImage}`} alt="" />
      <span className={`${classNameLabel}`}>{label}</span>
    </button>
  );
};

export default ButtonSecondary;
