import shape1 from "../../../assets/Icon (2).png";
import shape2 from "../../../assets/Icon (3).png";
import shape3 from "../../../assets/Icon (4).png";

export default function ShapesSection(){
  return (
    <div className="absolute inset-0 h-full w-full grid grid-cols-2 text-white">
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
  </div>
  );
}
