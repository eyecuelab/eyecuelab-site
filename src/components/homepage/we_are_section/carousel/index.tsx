import React, { useEffect, useState } from "react";
import Innovation from "./innovation";
import Precision from "./precision";
import Vision from "./vision";
import { useInView } from "react-intersection-observer";

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const carouselArray = [
    <Precision
      setIndex={(x) => {
        setCarouselIndex(x);
        setIsCarouselActive(false);
      }}
    />,
    <Innovation
      setIndex={(x) => {
        setCarouselIndex(x);
        setIsCarouselActive(false);
      }}
    />,
    <Vision
      setIndex={(x) => {
        setCarouselIndex(x);
        setIsCarouselActive(false);
      }}
    />,
  ];

  const { ref, inView } = useInView();

  useEffect(() => {
    let interval: number;
    interval = setInterval(() => {
      if (inView) {
        setIsCarouselActive(true);
        if (isCarouselActive) {
          setCarouselIndex((prevIndex) => {
            return prevIndex === carouselArray.length - 1 ? 0 : prevIndex + 1;
          });
        }
      }
    }, 4500);
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
