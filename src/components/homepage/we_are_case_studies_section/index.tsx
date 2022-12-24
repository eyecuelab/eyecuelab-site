import { copyString } from "./constants";

export default function WhoWeArePage() {
  return (
    <div className="w-screen h-screen px-6 grid grid-rows-6">
      <div className="grid grid-cols-3">
        <div className="w-20">arrow left</div>
        <div className="justify-self-center text-center">
          <div>View All</div>
          <div>Case Studies</div>
        </div>
        <div className="w-20 justify-self-end">arrow right</div>
      </div>
      <div className="text-3xl font-bold row-span-3">
        <h1>Who We Are</h1>
        <div className="h-72">...</div>
      </div>
      <div className="row-span-2 md:grid md:grid-cols-2">
        <div className="text-2xl">
          <p>{copyString}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2 items-center md:items-baseline">
          <div className="justify-self-end">arrow left</div>
          <div>arrow right</div>
        </div>
      </div>
    </div>
  );
}