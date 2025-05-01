"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ButtonSecondary from "./buttons/buttonSecondary";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/Links",
      label: "Links",
      iconBig: "/Assets/images/icon-links-header.svg",
    },
    {
      href: "/profile",
      label: "Profile Details",
      iconBig: "/Assets/images/icon-profile-details-header.svg",
    },
  ];

  return (
    <div className="flex justify-center bg-white  rounded-md">
      <div className="flex justify-between items-center w-full p-3">
        <div>
          <img
            src="/Assets/images/logo-devlinks-large.svg"
            alt="Logo"
            className="hidden sm:block"
          />
          <img
            src="/Assets/images/logo-devlinks-small.svg"
            alt="Logo"
            className="sm:hidden"
          />
        </div>

        {/* <div className="text-grey flex gap-6 ">
          <div
            className={`flex gap-2 items-center hover:text-purple ${
              isActive ? "text-purple" : "text-grey"
            }  hover:border-purple`}
          >
            <img
              className=""
              src="/Assets/images/icon-links-header.svg"
              alt=""
            />
            <p className="hidden sm:block">Links</p>
          </div>

          <div className="flex gap-2 items-center hover:text-purple">
            <img src="/Assets/images/icon-profile-details-header.svg" alt="" />
            <p className="hidden sm:block">Profile Details</p>
          </div>
        </div> */}

        <div className="text-grey flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 hover:text-purple transition-colors p-3 rounded-lg ${
                  isActive ? "text-purple bg-lighterPurple" : "text-grey"
                }`}
              >
                <img
                  src={item.iconBig}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`${
                    isActive ? "filter-purple" : ""
                  } transition duration-200`}
                />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div>
          <ButtonSecondary
            classNameButton=""
            label="Preview"
            imageSrc="Assets/images/icon-preview-header.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
