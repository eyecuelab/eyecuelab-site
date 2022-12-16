import React, { useState } from "react";
import { Link } from "gatsby";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import logo from "../../../images/w-eyecuelogo.png";
import { headerLinks } from "./headerLinks";
import cn from "classnames";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <>
      <div
        className={cn("fixed top-0 z-10 h-28 w-full text-white text-xl", {
          "bg-transparent": !nav,
          "hidden": nav,
        })}
      >
        <div className="h-full md:grid md:grid-cols-12 flex justify-between items-center py-8 px-5">
          <div className="col-start-1 col-end-2 flex items-center justify-start">
            <span className="">
              <img src={logo} alt="EyeCueLab" />
            </span>
          </div>
          <div className="hidden col-start-2 col-end-13 md:flex items-center ">
            <ul className="grid grid-cols-6 w-full pr-3">
              {headerLinks.map((nav, idx) => {
                const navKey = `${idx}_navKey`;
                return (
                  <li
                    className="flex justify-start last:justify-center items-center ml-2 last:col-start-6  last:border last:border-white last:h-10 whitespace-nowrap"
                    onClick={handleClose}
                    key={navKey}
                  >
                    <Link className="" to="/">
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <button className="md:hidden text-white px-6 py-2 whitespace-nowrap flex justify-center items-center">
              <p className={nav ? "hidden" : "border px-6 py-2"}>Contact Us</p>
            </button>
          </div>
          <div className="">
            <span className="md:hidden text-white flex justify-end items-center" onClick={handleClick}>
              {!nav ? <MenuAlt3Icon className="w-5 hover:scale-95" /> : <XIcon className="w-5 hover:scale-95" />}
            </span>
          </div>
        </div>
      </div>
      <div className={nav ? "absolute bg-gradient-to-tl from-nav-light-blue to-nav-blue w-full h-full z-50" : "hidden"}>
        <div className="h-24 w-full container py-8 px-5">
          <div className="flex justify-between">
            <span className="">
              <img src={logo} alt="EyeCueLab" />
            </span>
            <span className="md:hidden text-white flex justify-end items-center" onClick={handleClick}>
              {!nav ? <MenuAlt3Icon className="w-5 hover:scale-95" /> : <XIcon className="w-5 hover:scale-95" />}
            </span>
          </div>
          <div className="w-full h-full flex flex-col">
            <ul className={!nav ? "hidden" : "md:hidden flex flex-col justify-start"}>
              {headerLinks.map((nav, idx) => {
                const navKey = `${idx}_navKey`;
                return (
                  <li
                    className="last:mt-60 text-white last:text-center font-semibold last:py-2 last:px-4 last:border last:border-white-400 mt-11 first:mt-32 text-2xl"
                    onClick={handleClose}
                    key={navKey}
                  >
                    {nav.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
