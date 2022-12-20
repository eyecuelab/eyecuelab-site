import { copyString } from "./constants";

export default function WhoWeArePage() {
  return (
    <div className="w-full h-full px-6 border border-orange-600">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20">arrow left</div>
        <div className="flex flex-col font-medium items-center">
          <div>View All</div>
          <div>Case Studies</div>
        </div>
        <div className="w-20">arrow right</div>
      </div>
      <div className="pt-16 pb-7 text-3xl font-bold">
        <h1>Who We Are</h1>
      </div>
      <div className="h-72">image container</div>
      <div className="text-2xl">
        <p>{copyString}</p>
      </div>
      <div className="flex flex-row justify-center py-8">
        <div>arrow left</div>
        <div>arrow right</div>
      </div>
    </div>
  );
}