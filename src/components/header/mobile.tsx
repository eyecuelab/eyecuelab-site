import React, { useState } from "react";
import logo from "../../assets/w-eyecuelogo.png";
import hex from "../../assets/Icon.png";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { navItems } from "./navItems";

export default function NavMobile() {
  const [nav, setNav] = useState(false);

  function handleNavToggle(nav: boolean) {
    setNav(!nav);
  }

  return (
    <>
      {/* Mobile */}
      <div className="w-[95vw] mx-auto h-28 text-xl text-white whitespace-nowrap fixed inset-0 z-50 bg-transparent grid grid-cols-6 lg:hidden">
        <div className="flex justify-start items-center">
          <a href="/">
            <img
              src={logo}
              alt="EyeCueLab"
              width={57}
              height={57}
            />
          </a>
        </div>
        <div></div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="w-32 h-11 flex justify-center items-center border">
            <p>Contact Us</p>
          </div>
        </div>
        <div></div>
        <div className="flex justify-end items-center">
          <MenuAlt3Icon
            className="w-10 h-10"
            onClick={() => handleNavToggle(nav)}
          />
        </div>
      </div>
      {nav && (
        <div className="w-full h-full fixed inset-0 z-50 text-white bg-gradient-to-tl from-nav-light-blue to-nav-blue lg:hidden">
          <div className="w-[95vw] mx-auto h-full">
            <div className="h-28 grid grid-cols-6 z-50">
              <div className="flex justify-start items-center">
                <a href="/">
                  <img
                    src={logo}
                    alt="EyeCueLab"
                    width={57}
                    height={57}
                  />
                </a>
              </div>
              <div className="col-span-4"></div>
              <div className="flex justify-end items-center">
                <XIcon
                  className="w-10 h-10"
                  onClick={() => handleNavToggle(nav)}
                />
              </div>
            </div>
            <div className="h-2/3 flex items-center text-2xl">
              <div className="h-3/4 w-full">
                <div className="flex flex-col items-start justify-start ">
                  {navItems?.map((item, idx) => {
                    const navKey = `${idx} ${item.name}}`;
                    return (
                      <div
                        className="mt-14"
                        key={navKey}
                      >
                        <a href={`${item.link}`}>{item.name}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-2 mt-24">
              <div className="w-full h-11 flex justify-center items-center border border-white">
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full grid grid-rows-5 -z-10">
            <div className="h-full row-start-3 row-span-3 flex justify-end items-end">
              <div className="h-full pt-10">
                <img
                  src={hex}
                  alt="hex"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
