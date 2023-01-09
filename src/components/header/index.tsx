import logo from "../../assets/w-eyecuelogo.png";
import { navItems } from "./navItems";
import NavMobile from "./mobile";

export default function Header() {
  return (
    <>
      <NavMobile />
      {/* Desktop */}
      <div className="hidden w-full h-28 text-xl text-white whitespace-nowrap fixed inset-0 z-50 bg-transparent lg:grid grid-cols-12 gap-2">
        <div className="flex justify-center items-center">
          <a href="/">
            <img
              src={logo}
              alt="EyeCueLab"
              width={57}
              height={57}
            />
          </a>
        </div>
        <div className="col-span-7 flex items-center">
          <div className="flex justify-start pl-6">
            {navItems?.map((item, idx) => {
              const navKey = `${idx} ${item.name}`;
              return (
                <div
                  className="mr-10"
                  key={navKey}
                >
                  <a href={`${item.link}`}>{item.name}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 w-full"></div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="h-11 w-52 flex justify-center items-center border border-white">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}
