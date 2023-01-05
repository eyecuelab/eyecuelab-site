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
      <div className="hidden w-full h-full lg:grid grid-cols-2 grid-rows-2">
        <div className="bg-[#0085FF] row-span-2 flex items-center justify-end">
          <div className="relative w-4/5 h-4/5 flex items-center mt-16">
            <div className="absolute top-14 w-full">
              <img
                src={shape1}
                alt="plane"
                className="w-96"
              />
            </div>
            <div className="flex flex-col justify-center w-2/3 h-full">
              <h1 className="text-4xl font-semibold leading-relaxed w-72">
                Launch
                <br />
                Successful MVPs
              </h1>
              <p className="mt-8 w-72">You bring the vision, we'll help you successfully take it to market through our proven approach.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0076FF] flex items-center justify-end">
          <div className="relative h-full flex justify-start items-center w-4/5 mx-auto ">
            <div className="absolute left-64 pb-12 w-3/5">
              <img
                src={shape2}
                alt="plane"
                className="h-1/2 w-52"
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
            <div className="absolute left-52 w-4/5 pb-12">
              <img
                src={shape3}
                alt="shape"
                className="h-1/2 w-72"
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

