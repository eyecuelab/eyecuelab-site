import shape1 from "../../../assets/Icon (3).svg";
import shape2 from "../../../assets/Icon (4).svg";
import shape3 from "../../../assets/Icon (5).svg";

export default function ShapesSection() {
  return (
    <div className="absolute inset-0 text-white">
      {/* mobile */}
      <div className="lg:hidden w-full h-[150vh] bg-white grid grid-rows-3">
        <div className="bg-[#0085FF] grid grid-rows-[2fr_1fr]">
          <div className="w-full h-full flex justify-center items-center relative">
            <img
              src={shape1}
              alt="plane"
              className="w-2/3 h-2/3 object-contain absolute bottom-0"
            />
          </div>
          <div className="w-[95vw] mx-auto">
            <div className="flex flex-col justify-start w-4/5 pb-3">
              <h1 className="text-3xl font-semibold leading-relaxed">
                Launch
                <br />
                Successful MVPs
              </h1>
              <p className="mt-3">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0076FF] grid grid-rows-[2fr_1fr]">
          <div className="w-full h-full flex justify-center items-center relative">
            <img
              src={shape2}
              alt="plane"
              className="w-4/5 h-4/5 absolute bottom-0"
            />
          </div>
          <div className="w-[95vw] mx-auto">
            <div className="flex flex-col justify-start w-4/5 pb-3">
              <h1 className="text-3xl font-semibold leading-relaxed">Enhance existing features</h1>
              <p className="mt-4">Modernize internal workflows + architecture to produce industry-leading solutions.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0047FB] grid grid-rows-[2fr_1fr]">
          <div className="w-full h-full flex justify-center items-center relative">
            <img
              src={shape3}
              alt="plane"
              className="w-4/5 h-4/5 absolute bottom-0"
            />
          </div>
          <div className="w-[95vw] mx-auto">
            <div className="flex flex-col justify-start w-4/5 pb-3">
              <h1 className="text-3xl font-semibold leading-relaxed">Create New Innovative Products</h1>
              <p className="mt-4">Shake up your industry by developing + launching your next big product with our team of innovation experts.</p>
            </div>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="border w-full h-full grid grid-cols-2 grid-rows-2">
        <div className="relative bg-[#0085FF] row-span-2 flex items-center">
          {/* todo: fix this */}
          <div className="">
            <div className="p-12 mb-10">
              <img
                src={shape1}
                alt="plane"
                className="border w-2/3"
              />
            </div>
            <div className="flex flex-col justify-start w-2/3 p-8">
              <h1 className="text-4xl font-semibold leading-relaxed w-72">
                Launch
                <br />
                Successful MVPs
              </h1>
              <p className="mt-8 w-72 border">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0076FF]">
          <div className="relative h-full flex justify-start items-center w-4/5 mx-auto">
            <div className="absolute w-full pb-12 flex justify-center items-center">
              <img
                src={shape2}
                alt="plane"
                className="h-1/2"
              />
            </div>
            <div className="ml-12 z-10 w-3/5 flex flex-col justify-start items-start">
              <h1 className="text-4xl font-semibold leading-relaxed w-72">Enhance existing features</h1>
              <p className="mt-4 w-72">Modernize internal workflows + architecture to produce industry-leading solutions.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0047FB]">
          <div className="relative h-full flex justify-start items-center w-4/5 mx-auto">
            <div className="absolute w-full pb-12 flex justify-center">
              <img
                src={shape3}
                alt="shape"
                className="h-1/2"
              />
            </div>
            <div className="ml-12 z-10 w-3/5 flex flex-col justify-start items-start">
              <h1 className="text-4xl font-semibold leading-relaxed w-[22rem]">Create New Innovative Products</h1>
              <p className="mt-4 w-[22rem]">Shake up your industry by developing + launching your next big product with our team of innovation experts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
    <div className="bg-[#0085FF] w-full h-full flex justify-end items-center">
      <div className="h-2/3 flex flex-col items-center justify-center">
        <div className="p-12 mb-10"><img src={shape1} alt="plane" /></div>
        <div className="flex flex-col justify-start w-2/3 p-8">
          <h1 className="text-5xl font-semibold leading-relaxed">Launch<br />Successful MVPs</h1>
          <p className="mt-8">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
        </div>
      </div>
    </div>
    <div className="w-full h-full flex flex-col">
        <div className="relative h-1/2 bg-[#0076FF] flex justify-start items-center">
        <div className=" ml-8 p-16 z-10 w-3/5 flex flex-col justify-start items-center">
          <h1 className="text-5xl font-semibold leading-relaxed">Enhance existing features</h1>
          <p className="mt-4">Modernize internal workflows + architecture to produce industry-leading solutions.</p>
        </div>
        <div className="absolute left-0 w-4/5 flex justify-end ml-8"><img src={shape2} alt="plane" className="pr-14"/></div>
      </div>
      <div className="relative h-1/2 bg-[#0047FB] flex justify-start items-center">
        <div className=" ml-8 p-16 z-10 w-3/5 flex flex-col justify-start items-center">
          <h1 className="text-5xl font-semibold leading-relaxed">Create New Innovative Products</h1>
          <p className="mt-4">Shake up your industry by developing + launching your next big product with our team of innovation experts.</p>
        </div>
        <div className="absolute left-0 w-4/5 flex justify-end ml-8"><img src={shape3} alt="plane" /></div>
      </div>
    </div>


*/
