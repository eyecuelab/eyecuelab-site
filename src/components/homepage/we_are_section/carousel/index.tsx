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
    <div className="w-full h-full overflow-hidden lg:hidden">
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

