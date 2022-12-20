import line from "../../public/Frame 113.svg";
import triangle from "../../public/icon1.svg";
import pyramid from "../../public/icon2.svg";
import hex2 from "../../public/icon3.svg";

export default function WhoWeAreSection() {
  return (
    <div className="absolute inset-0 bg-white">
    <img
      src={line}
      alt="line"
      className="w-full h-full absolute z-10 pb-32 px-1"
    />
    <div className="container mx-auto grid grid-cols-3 grid-rows-3 h-full w-full">
      <div className="flex flex-col items-start pl-5 col-start-1 row-span-2 pt-8">
        <div className="pb-28">
          <img
            src={triangle}
            alt="triangle"
            className="px-5"
          />
        </div>
        <div className="px-5 w-2/3">
          <h3 className="text-4xl font-semibold">Precision</h3>
          <br />
          <p className="">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
        </div>
      </div>
      <div className="col-span-2"></div>
      <div className="flex flex-col items-start pl-10 col-start-2 row-span-2">
        <div className="pb-8">
          <img
            src={pyramid}
            alt="pyr"
            className="px-5"
          />
        </div>
        <div className="px-11 w-3/4">
          <h3 className="text-4xl font-semibold">Innovation</h3>
          <br />
          <p className="">
            We've been in business for over 10-years, but still bring a fresh "startup velocity" to all our partners' projects.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end pl-10 pb-12 col-start-3 row-span-2">
        <div className="pb-12">
          <img
            src={hex2}
            alt="hex"
            className="px-5"
          />
        </div>
        <div className="pl-9 w-2/3">
          <h3 className="text-4xl font-semibold">Vision</h3>
          <br />
          <p className="">
            We don't just sit back and take work orders like most agencies. We actively brainstorm and iterate alongside your team.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
