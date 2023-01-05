import React from "react";
import { copyString } from "./constants";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";

export default function WhoWeArePage() {
  return (
    <div className="w-screen h-screen px-6 grid grid-rows-6">
      <div className="grid grid-cols-3 content-center">
        <img
          src={leftArrow}
          alt="Left Arrow"
          className="w-20 self-center md:place-self-end"
        />
        <div className="justify-self-center text-center md:grid md:grid-cols-2">
          <p className="font-medium text-lg">View All</p>
          <p className="font-medium text-lg">Case Studies</p>
        </div>
        <img
          src={rightArrow}
          alt="Right Arrow"
          className="w-20 justify-self-end self-center md:place-self-start"
        />
      </div>
      <div className="text-3xl font-bold row-span-3">
        <h1>Who We Are</h1>
        <div className="h-72">...</div>
      </div>
      <div className="row-span-2 md:grid md:grid-cols-2">
        <div className="text-2xl">
          <p>{copyString}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 mt-8 items-center md:items-baseline">
          <img
            src={leftArrow}
            alt="Left Arrow"
            className="justify-self-end"
          />
          <img
            src={rightArrow}
            alt="Right Arrow"
            className=""
          />
        </div>
      </div>
    </div>
  );
}