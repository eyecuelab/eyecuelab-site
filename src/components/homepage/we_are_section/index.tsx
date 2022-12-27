import line1 from "../../../assets/Frame 115.svg";
import Rectangle from "./rectangle";
import slice from "../../../assets/Slice 1.svg";
import Carousel from "./carousel";
export default function WhoWeAreSection() {
  return (
    <div className="absolute inset-0  bg-white">
      {/* Mobile */}
      <Carousel />
      {/* Desktop */}
      <div className="hidden w-full h-full absolute z-10 overflow-x-hidden md:flex">
        <img
          src={line1}
          alt="line"
          className="w-full h-full pb-36"
        />
      </div>
      <div className="w-[80vw] mx-auto h-full">
        <div className="w-full h-full hidden md:grid grid-cols-3 gap-3">
          <div className="w-full h-full flex justify-start items-end">
            <div className="w-full h-2/3 flex items-start">
              <div className="w-4/5 h-1/2">
                <h3 className="text-4xl font-semibold">Precision</h3>
                <br />
                <p className="text-base">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-end">
            <div className="w-full h-2/3 flex justify-center items-center">
              <div className="w-4/5 h-1/2 flex flex-col justify-center">
                <h3 className="text-4xl font-semibold">Innovation</h3>
                <br />
                <p className="text-base">
                  We've been in business for over 10-years, but still bring a fresh "startup velocity" to all our partners' projects.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <div className="w-full h-2/3 flex justify-center items-end">
              <div className="w-4/5 h-1/2 flex flex-col justify-center">
                <h3 className="text-4xl font-semibold">Vision</h3>
                <br />
                <p className="text-base">
                  We don't just sit back and take work orders like most agencies. We actively brainstorm and iterate alongside your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
