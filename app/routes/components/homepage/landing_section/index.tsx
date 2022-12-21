export default function LandingPage() {
  return (
    <div className="absolute inset-0 bg-[url('../../public/images/Video.png')] bg-cover">
      <div className="w-[94vw] mx-auto grid grid-rows-2 grid-cols-2 h-full">
        <div className="md:w-2/3 h-full col-start-1 row-start-2 col-span-2 flex justify-start items-end">
          <h3 className="text-5xl leading-relaxed text-white py-10 md:pb-16 md:w-2/3">
            Your Team for Truly Innovative <span className="font-semibold">Software Design + Development</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
