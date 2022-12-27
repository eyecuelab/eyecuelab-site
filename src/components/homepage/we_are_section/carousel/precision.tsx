import React from "react";
import slice from "../../../../assets/Slice 1.svg";
import Rectangle from "../rectangle";

export default function Precision() {
  return (
    <>
      <div className="w-[95vw] mx-auto h-full grid grid-rows-[2fr_1fr_140px]">
        <div className="pt-16">
          <img
            src={slice}
            alt="slice"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-4/5">
          <h3 className="text-5xl font-bold">Precision</h3>
          <br />
          <p className="text-lg">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
        </div>
        <div className="flex justify-start items-center">
          <Rectangle classNames="mr-5 fill-blue-500" />
          <Rectangle classNames="mr-5" />
          <Rectangle classNames="mr-5" />
        </div>
      </div>
    </>
  );
}
