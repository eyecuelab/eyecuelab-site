import { copyString } from "./constants";

export default function WhoWeArePage() {
  return (
    <div className="w-full h-full px-6 grid grid-rows-6">
      <div className="">
        <div className="w-20">arrow left</div>
        <div className="">
          <div>View All</div>
          <div>Case Studies</div>
        </div>
        <div className="w-20">arrow right</div>
      </div>
      <div className="pt-16 pb-7 text-3xl font-bold row-span-2">
        <h1>Who We Are</h1>
        <div className="h-72">image container</div>
      </div>
      <div className="text-2xl row-span-2">
        <p>{copyString}</p>
      </div>
      <div className="py-8">
        <div>arrow left</div>
        <div>arrow right</div>
      </div>
    </div>
  );
}