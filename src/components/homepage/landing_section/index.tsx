import video from "../../../assets/Video.png";
export default function LandingPage() {
  return (
    <>
      <img
        src={video}
        alt="video"
        className="w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0">
        <div className="md:w-[80vw] mx-auto grid grid-rows-2 grid-cols-2 h-full">
          <div className="w-full md:w-2/3 h-full col-start-1 row-start-2 col-span-2 flex justify-start items-end p-3">
            <h3 className="text-5xl leading-relaxed text-white py-10 md:pb-16 md:w-4/5">
              Your Team for Truly Innovative <span className="font-semibold">Software Design + Development</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
