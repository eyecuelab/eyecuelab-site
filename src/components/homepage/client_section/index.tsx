import eLogo from "../../../assets/logos/edf.png"
import gLogo from "../../../assets/logos/google.png"
import ingLogo from "../../../assets/logos/inergy.png"
import inLogo from "../../../assets/logos/intel.png"
import kLogo from "../../../assets/logos/knox.png"
import nLogo from "../../../assets/logos/nike.png"
import pLogo from "../../../assets/logos/powur.png"
import sLogo from "../../../assets/logos/shl.png"

export default function ClientSection(){
  return (
    <div className="absolute inset-0 h-full w-full block">
          <div className="w-full h-3/4 bg-[#F0F8FF] flex justify-center items-center">
            <div className="w-full h-2/3 flex flex-col justify-center">
              <div className="h-1/3 flex justify-center items-center">
                <img src={gLogo} alt="google" className="mr-14" />
                <img src={nLogo} alt="nike" className="mr-14" />
                <img src={eLogo} alt="edf" className="mr-14" />
                <img src={inLogo} alt="intel" className="mr-14" />
                <img src={ingLogo} alt="inergy" />
              </div>
              <div className="h-1/3 flex justify-center items-center">
                <img src={pLogo} alt="powur" className="mr-14" />
                <img src={kLogo} alt="knox" className="mr-14" />
                <img src={sLogo} alt="shl" className="mr-14" />
              </div>
            </div>
          </div>
          <div className="w-full h-1/4 bg-white border">
            <div className="text-5xl leading-normal w-1/3 h-full flex justify-center items-center ml-20">
              <h2>
                Let's Build
                <br />
                <span className="font-bold">
                  Something Amazing
                </span>
              </h2>
            </div>
          </div>
        </div>
  );
}
