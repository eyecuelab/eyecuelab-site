import video from "../../../assets/Video.png";
export default function LandingPage() {
  return (
    <>
      <div className="absolute inset-0 bg-landingPage bg-cover bg-no-repeat flex items-end pb-12">
        <div className="w-[95vw] lg:w-[80vw] mx-auto h-1/2 flex items-center lg:items-end">
          <h3 className="lg:w-4/5 xl:w-1/2 text-[3rem] leading-relaxed text-white py-6 ">
            Your Team for Truly Innovative <span className="font-semibold">Software Design + Development</span>
          </h3>
        </div>
      </div>
    </>
  );
}
