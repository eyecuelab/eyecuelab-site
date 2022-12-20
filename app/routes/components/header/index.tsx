import logo from "~/public/images/w-eyecuelogo.png" 

export default function Header() {
  return (
    <div className="w-full h-28 text-xl fixed inset-0 z-50 bg-transparent grid grid-cols-12">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={logo}
          alt="EyeCueLab"
        />
      </div>
      <div className="w-full h-full text-white flex justify-center items-center">Who We Are</div>
      <div className="w-full h-full text-white flex justify-center items-center">Case Studies</div>
      <div className="w-full h-full text-white flex justify-center items-center">What We Do</div>
      <div className="w-full h-full col-span-2 text-white flex justify-start items-center">Innovation Assessment</div>
      <div className="w-full h-full col-span-4"></div>
      <div className="w-full h-full col-span-2 text-white flex justify-center items-center">
        <p className="border border-white h-1/3 w-1/2 p-4 flex justify-center items-center">Contact Us</p>
      </div>
    </div>
  );
}
