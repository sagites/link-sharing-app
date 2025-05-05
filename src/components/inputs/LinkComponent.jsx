import React, { useState } from "react";
import CustomSelect from "./Dropdown";
import InputField from "./textField";

const LinkComponent = ({ index, onRemove }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handlePlatformChange = (platformName) => {
    setSelectedPlatform(platformName);
    console.log("Selected platform:", platformName);
  };

  return (
    <div className="text-grey bg-lightGrey rounded p-4">
      <div className="flex justify-between pb-2">
        <p className="text-Heading-S">Link #{index + 1}</p>
        <p
          className="text-Body-M cursor-pointer"
          onClick={onRemove}
        >
          Remove
        </p>{" "}
      </div>
      <div>
        <p className="text-Body-S">Platform</p>
        <CustomSelect
          value={selectedPlatform}
          onChange={handlePlatformChange}
        />
      </div>
      <div className="pt-3">
        <p className="text-Body-S">Link</p>
        <InputField
          placeholder=""
          icon="/Assets/images/icon-link-copied-to-clipboard.svg"
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default LinkComponent;
