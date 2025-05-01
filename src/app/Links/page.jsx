import ButtonSecondary from "@/components/buttons/buttonSecondary";
import React from "react";

const Links = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 pt-3">
        <div className="relative bg-white col-span-2 p-3">
          <img
            src="/Assets/outerOutline.svg"
            alt="Outer"
            className="w-115 h-115 "
          />

          <img
            src="/Assets/innerOutline.svg"
            alt="Inner"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-110 h-110"
          />
        </div>

        <div className="col-span-3 justify-center items-center bg-white">
            <div>
                <p className="text-Heading-M text-dark">Customize your links</p>
                <p className="text-grey">Add/edit/remove links below and share all your profiles with the world</p>
            </div>
            <div>
                <ButtonSecondary classNameButton='w-full' classNameLabel='' label="+ Add new link"/>
            </div>
            <div>
                <img src="/Assets/images/illustration-empty.svg" alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
