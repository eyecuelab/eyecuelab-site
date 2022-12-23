import React, { useState, useEffect } from "react";

export function useScreenSize() {
  const [windowSize, setWindowSize] = useState({
    winWidth: 0,
    winHeight: 0,
  });

  const detectSize = () => {
    setWindowSize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowSize]);

  return windowSize;
}
