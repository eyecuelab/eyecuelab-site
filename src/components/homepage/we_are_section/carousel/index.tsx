import React, { useEffect, useState } from "react";
import Innovation from "./innovation";
import Precision from "./precision";
import Vision from "./vision";
import { useInView } from "react-intersection-observer";

const carouselArray = [<Precision />, <Innovation />, <Vision />];

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    let interval: number;
    interval = setInterval(() => {
      if (inView) {
        setCarouselIndex((prevIndex) => {
          return prevIndex === carouselArray.length - 1 ? 0 : prevIndex + 1;
        });
      }
    }, 3000);
    if (!inView) clearInterval(interval);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="w-full h-full overflow-hidden lg:hidden">
      {carouselArray.map((item, index) => {
        return (
          index === carouselIndex && (
            <div
              ref={ref}
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
