import logo from "~/public/images/w-eyecuelogo.png" 

export default function Header() {
  return (
    <div className="w-full h-28 text-xl text-white whitespace-nowrap fixed inset-0 z-50 bg-transparent grid grid-cols-12 gap-2">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="EyeCueLab"
          width={57}
          height={57}
        />
      </div>
      <div className="col-span-7 flex items-center">
        <div className="flex justify-start pl-6">
          <div className="mr-8">Who We Are</div>
          <div className="mr-8">Case Studies</div>
          <div className="mr-8">What We Do</div>
          <div className="mr-8">Innovation Assessment</div>
        </div>
      </div>
        <div className="col-span-2 w-full"></div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="h-11 w-52 flex justify-center items-center border">
            <p>Contact Us</p>
          </div>
        </div>
    </div>
  );
}
