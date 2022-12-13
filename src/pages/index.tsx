import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./homepage";
import "../styles/sass/main.scss";
import hex from "../images/Icon.png";
import hex1 from "../images/Icon (1).png";
import Header from "./components/header";
import { screenSize } from "../utilities/screenSize";

const IndexPage: React.FC<PageProps> = () => {
  const windowWidth = screenSize().winWidth;
  console.log(windowWidth)
  return (
    <div className="font-proxima bg-zinc-800 w-screen h-screen">
      <Header />
      <HomePage />
      <div className="relative top-0 bg-gradient-to-tl from-nav-light-blue to-nav-blue h-full " >
        <div className="h-full">
          <div className="absolute right-0 md:right-20 bottom-24 md:bottom-0 z-10">
            <img src={windowWidth < 768 ? hex : hex1} alt="hex" />
          </div>
          <div className="bg-white absolute right-0 md:left-0 bottom-0 h-28 w-[62vw] md:w-[72vw] z-20 flex justify-center md:justify-end md:pr-32 items-center">
            + Who We Are
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>EyeCueLab</title>
    </>
  )
}
