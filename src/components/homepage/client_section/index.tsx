import eLogo from "../../../assets/logos/edf.tif.svg";
import gLogo from "../../../assets/logos/google.tif.svg";
import ingLogo from "../../../assets/logos/inergy.tif.svg";
import inLogo from "../../../assets/logos/intel.tif.svg";
import kLogo from "../../../assets/logos/knox.tif.svg";
import nLogo from "../../../assets/logos/nike.tif.svg";
import pLogo from "../../../assets/logos/powur.tif.svg";
import sLogo from "../../../assets/logos/shl.tif.svg";

export default function ClientSection() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div className="w-full h-3/4 bg-[#F0F8FF]">
        {/* Mobile */}
        <div className="w-full h-full lg:hidden grid grid-cols-2 pt-16">
          <div className="flex flex-col items-center justify-around">
            <img
              src={gLogo}
              alt="google"
              className="h-11 w-32"
            />
            <img
              src={pLogo}
              alt="powur"
              className="h-11 w-32"
            />
            <img
              src={ingLogo}
              alt="inergy"
              className="h-11 w-32"
            />
            <img
              src={eLogo}
              alt="edf"
              className="h-11 w-32"
            />
          </div>
          <div className="flex flex-col items-center justify-around">
            <img
              src={nLogo}
              alt="nike"
              className="h-11 w-32"
            />
            <img
              src={kLogo}
              alt="knox"
              className="h-11 w-32"
            />
            <img
              src={inLogo}
              alt="intel"
              className="h-11 w-32"
            />
            <img
              src={sLogo}
              alt="shl"
              className="h-11 w-32"
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex flex-col justify-center w-full h-full">
          <div className="h-1/3 flex justify-center items-center">
            <img
              src={gLogo}
              alt="google"
              className="mr-14"
            />
            <img
              src={nLogo}
              alt="nike"
              className="mr-14"
            />
            <img
              src={eLogo}
              alt="edf"
              className="mr-14"
            />
            <img
              src={inLogo}
              alt="intel"
              className="mr-14"
            />
            <img
              src={ingLogo}
              alt="inergy"
            />
          </div>
          <div className="h-1/3 flex justify-center items-center">
            <img
              src={pLogo}
              alt="powur"
              className="mr-14"
            />
            <img
              src={kLogo}
              alt="knox"
              className="mr-14"
            />
            <img
              src={sLogo}
              alt="shl"
              className="mr-14"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 bg-white">
        <div className="text-4xl leading-normal w-[95vw] lg:w-[80vw] mx-auto h-full flex justify-start items-center">
          <h2>
            Let's Build
            <br />
            <span className="font-bold">Something Amazing</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

