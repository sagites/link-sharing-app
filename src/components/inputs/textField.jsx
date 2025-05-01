import { useState } from "react";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  errorMessage,
  icon,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = `
    pl-10 pr-4 py-2 border rounded-md w-full
    ${
      isFocused
        ? "border-purple shadow-purple shadow-sm"
        : value
        ? "border-green-500"
        : "border-grey"
    }
    ${errorMessage ? "border-red" : ""}
    focus:outline-none focus:ring
    ${errorMessage ? "focus:ring-red" : "focus:ring-purple"}
  `;

  return (
    <div className="relative w-full text-dark">
      {label && (
        <label
          className="block mb-1 text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        className={`placeholder-grey ${inputClasses}`}
        placeholder={placeholder}
      />

      {errorMessage && (
        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-Body-S text-red pointer-events-none">
          {errorMessage}
        </span>
      )}

      {icon && (
        <img className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none" src={icon}/>
      )}
    </div>
  );
};

export default InputField;
