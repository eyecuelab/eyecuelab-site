import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HomePage from "./homepage";
import "../styles/sass/main.scss";
import hex from "../images/Icon.png";
import hex1 from "../images/Icon (1).png";
import Header from "./components/header";
import { screenSize } from "../utilities/screenSize";
import styled from "styled-components";

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
          <div className="absolute z-20 left-0 top-64 h-72 w-[90vw] flex justify-between">
            <div className="w-[40vw] flex justify-end items-center text-white text-8xl font-proxima font-semibolds" >Who Is <br/>EyeCue Lab</div>
            <div className="w-[40vw] flex justify-start items-center text-white text-4xl font-proxima font-thin" >Our goal is to help your team activate your innovation potential, and build solutions that we're all excited about.</div>
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
