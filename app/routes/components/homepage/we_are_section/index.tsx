import line from "~/public/Frame 113.svg";
import triangle from "~/public/icon1.svg";
import pyramid from "~/public/icon2.svg";
import hex2 from "~/public/icon3.svg";

export default function WhoWeAreSection() {
  return (
    <div className="absolute inset-0 bg-white ">
      <div className="w-full h-full absolute z-10 overflow-x-hidden">
        <img
          src={line}
          alt="line"
          className="w-full h-full scale-x-[1.04]"
        />
      </div>
      <div className="w-[80vw] mx-auto h-full">
        <div className="w-full h-full grid grid-cols-3 gap-2">
          <div className="w-full h-full flex justify-start items-start">
            <div className="h-2/3 w-4/5 flex items-center">
              <div className="h-2/3 w-full">
                <div className="pb-36">
                  <img
                    src={triangle}
                    alt="triangle"
                    className="w-1/3 h-1/3"
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="text-4xl font-semibold">Precision</h3>
                  <br />
                  <p className="text-lg">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="h-2/3 w-4/5 flex items-end pt-3">
              <div className="h-2/3 w-full">
                <div className="pb-16">
                  <img
                    src={pyramid}
                    alt="pyramid"
                    className="w-2/5 h-2/5"
                  />
                </div>
                <div className="w-4/5 pl-6">
                  <h3 className="text-4xl font-semibold">Innovation</h3>
                  <br />
                  <p className="text-lg">
                    We've been in business for over 10-years, but still bring a fresh "startup velocity" to all our partners' projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <div className="h-2/3 w-4/5 flex items-end pt-2">
              <div className="h-2/3 w-full">
                <div className="pb-12">
                  <img
                    src={hex2}
                    alt="hex2"
                    className="w-2/5 h-2/5 "
                  />
                </div>
                <div className="w-4/5 pl-6">
                  <h3 className="text-4xl font-semibold">Vision</h3>
                  <br />
                  <p className="text-lg">
                    We don't just sit back and take work orders like most agencies. We actively brainstorm and iterate alongside your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
