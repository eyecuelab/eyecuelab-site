import React from "react";
interface RectangleProps {
  classNames?: string;
  width?: string;
  height?: string;
  fill?: string;
}
export default function Rectangle({ classNames, width, height, fill }: RectangleProps) {
  return (
    <svg
      width={60}
      height={4}
      viewBox="0 0 56 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classNames}`}
    >
      <rect
        width={width ? width : "60"}
        height={height ? height : "8"}
        fill={fill ? fill : "#F2F2F2"}
        className={`${classNames}`}
      />
    </svg>
  );
}
