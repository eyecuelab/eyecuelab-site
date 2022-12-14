import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/sass/main.scss";
import hex from "../images/Icon.png";
import hex1 from "../images/Icon (1).png";
import Header from "./components/header";
import { screenSize } from "../utilities/screenSize";
import RelativeFullScreen from "./components/relativeLayout";
import { PlusIcon } from "@heroicons/react/outline";
import line from "../images/Vector 15 (2).png";
const IndexPage: React.FC<PageProps> = () => {
  const windowWidth = screenSize().winWidth;

  console.log(windowWidth);
  return (
    <div className="font-proxima bg-zinc-800 w-screen h-screen overflow-x-hidden">
      <Header />
      <RelativeFullScreen classNames="text-5xl text-white leading-relaxed eyecuebody">
        <h3 className="absolute w-full bottom-36 left-0 px-4 md:px-0 md:left-44 md:bottom-36 md:w-1/2">
          Your Team for Truly Innovative <span className="font-bold">Software Design + Development</span>
        </h3>
      </RelativeFullScreen>
      <RelativeFullScreen classNames="bg-gradient-to-tl from-nav-light-blue to-nav-blue">
        <div className="h-full">
          <div className="absolute right-0 md:right-20 bottom-24 md:bottom-0 z-10">
            <img src={windowWidth < 768 ? hex : hex1} alt="hex" />
          </div>
          <div className="absolute z-20 left-0 bottom-72 h-72 w-[90vw] flex flex-col md:flex-row justify-between">
            <div className="w-[40vw] flex justify-end items-center text-white text-8xl font-proxima font-semibolds">
              Who Is <br />
              EyeCue Lab
            </div>
            <div className="w-[40vw] flex justify-start items-center text-white text-3xl font-proxima font-thin leading-relaxed">
              Our goal is to help your team activate your innovation potential, and build solutions that we're all excited about.
            </div>
          </div>
          <div className="bg-white absolute right-0 md:left-0 bottom-0 h-28 w-[62vw] md:w-[72vw] z-20 flex justify-center md:justify-end md:pr-32 items-center">
            <PlusIcon className="h-7 w-7 text-blue-400 mr-5" />
            <p className="text-xl">Who We Are</p>
          </div>
        </div>
      </RelativeFullScreen>
      <RelativeFullScreen classNames="bg-white border border-purple-600">
        <div className={`h-full -z-10 border border-orange-700`}>
          <img src={line} alt="line" className="w-screen absolute bottom-14" />
        </div>
        <div className="absolute top-0 w-full h-full z-20 border-orange-700 grid grid-cols-3">
          <div className="border border-green-400" />
          <div className="border border-green-400" />
          <div className="border border-green-400" />
        </div>
      </RelativeFullScreen>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>EyeCueLab</title>
    </>
  );
};
