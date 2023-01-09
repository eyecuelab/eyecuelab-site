import React from "react";
import slice from "../../../../assets/Slice 3 (2).svg";
import Rectangle from "../rectangle";
interface Props {
  setIndex: (index: number) => void;
}
export default function Vision({ setIndex }: Props) {
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
          <h3 className="text-5xl font-bold">Vision</h3>
          <br />
          <p className="text-lg">
            We don't just sit back and take work orders like most agencies. We actively brainstorm and iterate alongside your team.
          </p>
        </div>
        <div className="flex justify-start items-center">
          <Rectangle
            classNames="mr-5"
            onClick={() => setIndex(0)}
          />
          <Rectangle
            classNames="mr-5"
            onClick={() => setIndex(1)}
          />
          <Rectangle
            classNames="mr-5 fill-blue-500"
            onClick={() => setIndex(2)}
          />
        </div>
      </div>
    </>
  );
}
