import hex1 from "../../../assets/Frame 111.svg";
import hex2 from "../../../assets/Icon.png";
import { PlusIcon } from "@heroicons/react/outline";

export default function WhoIsSection() {
  return (
    <div className="absolute inset-0 bg-gradient-to-tl from-nav-light-blue to-nav-blue ">
      {/* mobile */}
      <div className="lg:hidden h-full grid grid-cols-3 grid-rows-4 z-20">
        <div className="w-[95vw] mx-auto row-start-2 row-span-2 col-start-1 col-span-3 flex items-end">
          <div className="w-96 h-3/4 flex flex-col justify-end">
            <h3 className="text-white text-6xl font-semibold leading-relaxed">
              Who Is <br />
              EyeCue Lab?
            </h3>
            <br />
            <h3 className="text-white text-xl leading-relaxed w-[90%]">
              Our goal is to help your team activate your innovation potential, and build solutions that we're all excited about.
            </h3>
          </div>
        </div>
        <div className="col-start-2 row-start-4 col-span-2 flex justify-end items-end">
          <div className="h-2/3 w-full bg-white flex justify-center items-center">
            <PlusIcon className="h-7 w-7 text-blue-400 mr-5" />
            Who we are
          </div>
        </div>
      </div>
      <div className="lg:hidden absolute inset-0 w-full h-full grid grid-cols-4">
        <div className="col-start-2 col-span-3 flex items-center justify-end">
          <div className="w-full flex justify-end">
            <img
              src={hex2}
              alt="hex"
              className=""
            />
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="w-[80vw] mx-auto h-full flex items-center">
        <div className="w-full h-3/4 flex items-center">
          <div className="w-2/5">
            <h2 className=" text-white text-6xl font-semibold">
              Who Is <br />
              EyeCue Lab?
            </h2>
          </div>
          <div className="w-3/5">
            <h2 className="text-white text-3xl leading-relaxed">
              Our goal is to help your team activate your innovation potential, and build solutions that we're all excited about.
            </h2>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 grid-rows-3 absolute inset-0">
          <div className="row-start-1 row-span-3 col-start-2 col-span-2 absolute h-full w-full flex justify-end items-end pt-4">
            <div className="w-3/4 h-4/5 p-0 flex items-end">
              <img
                src={hex1}
                alt="hex"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="hidden absolute left-0 bottom-0 lg:flex items-end w-full h-1/4">
          <div className="bg-white h-1/2 w-3/4 grid grid-col-4 grid-flow-col">
            <div className="col-start-4 flex items-center justify-center">
              <PlusIcon className="h-7 w-7 text-blue-400 mr-5" />
              Who we are
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
