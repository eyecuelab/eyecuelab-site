import React, { useEffect, useState } from "react";
import Innovation from "./innovation";
import Precision from "./precision";
import Vision from "./vision";

const carouselArray = [<Precision />, <Innovation />, <Vision />];

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => {
        return prevIndex === carouselArray.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselIndex]);

  return (
    <div className="border w-full h-full overflow-hidden md:hidden">
      {carouselArray.map((item, index) => {
        return (
          index === carouselIndex && (
            <div
              key={index}
              className="w-full h-full"
            >
              {item}
            </div>
          )
        );
      })}
    </div>
  );
}

/*
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
*/
