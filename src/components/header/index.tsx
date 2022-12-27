import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import logo from "../../assets/w-eyecuelogo.png";
import hex from "../../assets/Icon.png";

export default function Header() {
  const [nav, setNav] = useState(false);

  function handleNavToggle(nav: boolean) {
    setNav(!nav);
  }
  console.log(nav);

  return (
    <>
      {/* Mobile */}
      <div className="w-[95vw] mx-auto h-28 text-xl text-white whitespace-nowrap fixed inset-0 z-50 bg-transparent grid grid-cols-6 lg:hidden">
        <div className="flex justify-start items-center">
          <img
            src={logo}
            alt="EyeCueLab"
            width={57}
            height={57}
          />
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
                <img
                  src={logo}
                  alt="EyeCueLab"
                  width={57}
                  height={57}
                />
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
                  <div className="mt-14">Who We Are</div>
                  <div className="mt-14">Case Studies</div>
                  <div className="mt-14">What We Do</div>
                  <div className="mt-14">Innovation Assessment</div>
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

      {/* Desktop */}
      <div className="hidden w-full h-28 text-xl text-white whitespace-nowrap fixed inset-0 z-50 bg-transparent lg:grid grid-cols-12 gap-2">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="EyeCueLab"
            width={57}
            height={57}
          />
        </div>
        <div className="col-span-7 flex items-center">
          <div className="flex justify-start pl-6">
            <div className="mr-8">Who We Are</div>
            <div className="mr-8">Case Studies</div>
            <div className="mr-8">What We Do</div>
            <div className="mr-8">Innovation Assessment</div>
          </div>
        </div>
        <div className="col-span-2 w-full"></div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="h-11 w-52 flex justify-center items-center border border-white">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}
