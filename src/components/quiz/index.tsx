import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import illustrationQuiz from "../../assets/Illsutration_Quiz.svg";

export default function InnovationAssessment() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-80 bg-gradient-to-tl from-nav-light-blue to-nav-blue relative overflow-hidden">
          <div className="h-full w-4/5 absolute right-16 -bottom-20">
            <img
              src={illustrationQuiz}
              alt="illustration"
              className="w-full h-full scale-150"
            />
          </div>
          <div className="w-[95vw] mx-auto h-full flex items-end pb-10 text-white text-3xl font-semibold">
            <h3 className="leading-relaxed w-1/2">Innovation Assessment</h3>
          </div>
        </div>
        <div className="bg-white w-full h-full">
          <div className="w-[95vw] h-full mx-auto pt-20 block">
            <p className="font-extralight text-slate-400 normal-case">Step {`${`1`}`} of 12</p>
            <div className="border h-1 bg-slate-300 mt-2 rounded-sm relative">
              <span className={`absolute left-0 w-1/12 h-full bg-blue-500`}></span>
            </div>
            <div className="mt-4 grid grid-rows-6 gap-5">
              <div className="py-2 h-24">Question</div>
              <div className="border border-blue-200 py-4 h-24 flex justify-start items-center">
                <CheckCircleIcon className="w-12 text-blue-200 ml-2" />
              </div>
              <div className="border border-blue-200 py-4 h-24 flex justify-start items-center">
                <CheckCircleIcon className="w-12 text-blue-200 ml-2" />
              </div>
              <div className="border border-blue-200 py-4 h-24 flex justify-start items-center">
                <CheckCircleIcon className="w-12 text-blue-200 ml-2" />
              </div>
              <div className="border border-blue-200 py-4 h-24 flex justify-start items-center">
                <CheckCircleIcon className="w-12 text-blue-200 ml-2" />
              </div>
              <div className="h-24 flex justify-start items-center">
                <div className="flex justify-center items-center w-1/5 h-3/5 mr-4 text-slate-300 hover:text-blue-500 border hover:border-blue-500">
                  <ChevronLeftIcon className="w-10" />
                </div>
                <div className="w-4/5 h-3/5 py-2 flex justify-center items-center border hover:border-blue-500 text-slate-300 hover:text-blue-500">
                  <p className="font-bold text-xl mr-4">Next</p> <ChevronRightIcon className="w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
