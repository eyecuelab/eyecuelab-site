import * as React from "react";
import Header from "./components/header";
import RelativeFullScreen from "./components/relativeLayout";
import type { HeadFC, PageProps } from "gatsby";
import hex from "../images/Icon.png";
import hex1 from "../images/Icon (1).png";
import line from "../images/Vector 15 (2).png";
import middleShape from "../images/Group 135.png";
import thirdShape from "../images/Group 136.png";
import firstShape from "../images/Polygon 2.png";
import gLogo from "../images/logos/google.png"
import nLogo from "../images/logos/nike.png"
import eLogo from "../images/logos/edf.png"
import inLogo from "../images/logos/intel.png"
import ingLogo from "../images/logos/inergy.png"
import pLogo from "../images/logos/powur.png"
import kLogo from "../images/logos/knox.png"
import sLogo from "../images/logos/shl.png"
import "../styles/sass/main.scss";
import { screenSize } from "../utilities/screenSize";
import { PlusIcon } from "@heroicons/react/outline";

import WhoWeHelpPage from "./whowehelppage";
import WhoWeArePage from "./wearepage";
import ContactPage from "./contactpage";

const IndexPage: React.FC<PageProps> = () => {
  const windowWidth = screenSize().winWidth;
  // bg-zinc-800
  // font-proxima
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* <Header /> */}

      {/* <RelativeFullScreen classNames="text-5xl text-white leading-relaxed eyecuebody">
        <h3 className="absolute w-full bottom-36 left-0 px-4 md:px-0 md:left-44 md:bottom-36 md:w-1/2">
          Your Team for Truly Innovative <span className="font-bold">Software Design + Development</span>
        </h3>
      </RelativeFullScreen> */}

      {/* <RelativeFullScreen classNames="bg-gradient-to-tl from-nav-light-blue to-nav-blue">
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
      </RelativeFullScreen> */}

      {/* <RelativeFullScreen classNames="bg-white">
        <div className={`h-full -z-10`}>
          <img src={line} alt="line" className="w-screen absolute top-4" />
        </div>
        <div className="absolute top-0 w-full h-full z-20 grid grid-cols-3">
          <div className="flex flex-col justify-start items-end">
            <div className="w-full flex justify-start pl-7 pt-5">
              <div className="w-2/3 flex justify-center items-center h-full">
                <img src={firstShape} alt="shape" />
              </div>
            </div>
            <div className="h-1/3 w-1/2 flex flex-col justify-center items-start">
              <h3 className="text-4xl">Precision</h3>
              <br />
              <p className="">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-full flex justify-start pl-2 pt-5">
              <div className="w-2/3 flex justify-center items-center h-full">
                <img src={middleShape} alt="shape" />
              </div>
            </div>
            <div className="h-1/3 flex justify-center items-center">
              <div className="w-1/2 flex flex-col justify-end items-start">
                <h3 className="text-4xl">Innovation</h3>
                <br />
                <p className="">We've been in business for over 10-years, but still bring a fresh "startup velocity" to all our partners' projects.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="w-full flex justify-start mt-9">
              <div className="w-2/3 flex justify-center items-end">
                <img src={thirdShape} alt="shape" />
              </div>
            </div>
            <div className="h-1/3 flex justify-start items-center">
              <div className="w-1/2 flex flex-col justify-end items-start">
                <h3 className="text-4xl">Vision</h3>
                <br />
                <p className="">We don't just sit back and take work orders like most agencies. We actively brainstorm and iterate alongside your team.</p>
              </div>
            </div>
          </div>
        </div>
      </RelativeFullScreen> */}

      {/* <RelativeFullScreen classNames="border">
        <div className="absolute inset-0 h-full w-full block">
          <div className="w-full h-3/4 bg-[#F0F8FF] flex justify-center items-center">
            <div className="w-full h-2/3 flex flex-col justify-center">
              <div className="h-1/2 flex justify-center items-center">
                <img src={gLogo} alt="google" className="mr-14" />
                <img src={nLogo} alt="nike" className="mr-14" />
                <img src={eLogo} alt="edf" className="mr-14" />
                <img src={inLogo} alt="intel" className="mr-14" />
                <img src={ingLogo} alt="inergy" />
              </div>
              <div className="h-1/2 flex justify-center items-center">
                <img src={pLogo} alt="powur" className="mr-14" />
                <img src={kLogo} alt="knox" className="mr-14" />
                <img src={sLogo} alt="shl" className="mr-14" />
              </div>
            </div>
          </div>
          <div className="w-full h-1/4 bg-white">
            <div className="text-5xl leading-normal w-2/3 h-full flex justify-center items-center ml-16">
              <h2>
                Let's Build
                <br />
                <span className="font-bold">
                  Something Amazing
                </span>
              </h2>
            </div>
          </div>
        </div>
      </RelativeFullScreen> */}
      <RelativeFullScreen classNames="">
        <WhoWeHelpPage />
      </RelativeFullScreen>
      <RelativeFullScreen classNames="">
        <WhoWeArePage />
      </RelativeFullScreen>
      <RelativeFullScreen classNames="">
        <ContactPage />
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
