'use client';
import ButtonPrimary from "@/components/buttons/buttonPrimary";
import ButtonSecondary from "@/components/buttons/buttonSecondary";
import React, { useState } from "react";
import LinkComponent from "@/components/inputs/LinkComponent";

const Links = () => {
  const [links, setLinks] = useState([]);

  const addLink = () => {
    setLinks([...links, {}]);
  };

  const removeLink = (indexToRemove) => {
    setLinks((prevLinks) =>
      prevLinks.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div className="grid lg:grid-cols-5 gap-4 pt-3">
        <div className="lg:col-span-2  bg-white justify-center items-center hidden lg:flex p-1">
          <img
            className="w-[60%]"
            src="/Assets/images/illustration-phone-mockup.svg"
            alt=""
          />
        </div>

        <div className="lg:col-span-3 justify-center items-center bg-white p-6">
          <div className="pb-6">
            <p className="text-Heading-M text-dark font-bold">
              Customize your links
            </p>
            <p className="text-grey">
              Add/edit/remove links below and share all your profiles with the
              world
            </p>
          </div>
          <div className="pb-5">
            <ButtonSecondary
              classNameButton="w-full"
              classNameLabel=""
              label="+ Add new link"
              onClick={addLink}
            />
          </div>
          <div className="mt-4 space-y-4">
            {links.map((_, index) => (
              <LinkComponent
                key={index}
                index={index}
                onRemove={() => removeLink(index)}
              />
            ))}
          </div>
          <div className="bg-lightGrey rounded-lg  py-3 mb-">
            <div className="items-center justify-center flex flex-col p-10">
              <img src="/Assets/images/illustration-empty.svg" alt="" />
              <p className="text-Heading-M text-dark pt-5 pb-4 font-bold">
                {" "}
                Let's get you started
              </p>
              <p className="break-words w-full sm:w-[300px] md:w-[550px] text-center text-grey">
                Use the "Add new link" button to get started. Once you have more
                than one link, you can reorder and edit them. We're here to help
                you share your profiles with everyone
              </p>
            </div>
          </div>
          <div className="p-3 flex justify-end">
            <ButtonPrimary className="flex " label="Save" />
            <hr className="bg-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
