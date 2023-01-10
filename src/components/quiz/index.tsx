import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import illustrationQuiz from "../../assets/Illsutration_Quiz.svg";
import useInnovationQuizData from "./useInnovationQuizData";
/*
 //TODO: SUBMIT and multiselect answers
*/
export default function InnovationAssessment() {
  const [innovationQuizData, innovationQuizQuestions] = useInnovationQuizData();
  const [questionIndex, setQuestionIndex] = useState(0);
  let isGreaterThan4 = false;

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-80 lg:h-96 bg-gradient-to-tl from-nav-light-blue to-nav-blue relative overflow-hidden">
          <div className="h-full w-4/5 absolute right-16 -bottom-20">
            <img
              src={illustrationQuiz}
              alt="illustration"
              className="w-full h-full scale-150"
            />
          </div>
          <div className="w-[95vw] lg:w-[80vw] mx-auto h-full flex items-end lg:items-center pb-10 lg:pb-0 font-semibold">
            <h3 className="leading-relaxed w-1/2 lg:w-[23rem] text-white text-3xl lg:text-4xl lg:py-4">Innovation Assessment</h3>
            <div className="hidden lg:flex bg-white absolute w-3/5 h-1/4 right-0 bottom-0 z-10">
              <div className="w-4/5 mx-auto flex flex-col justify-center">
                <p className="font-extralight text-slate-400 normal-case pb-4">Step {`${questionIndex + 1}`} of 12</p>
                <div className="h-1 bg-slate-300 rounded-sm relative">
                  <span className={`absolute left-0 h-full ${questionIndex === 11 ? "w-full" : `w-${questionIndex + 1}/12`} bg-blue-500`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-full">
          <div className="w-[95vw] lg:w-[80vw] h-full mx-auto block">
            <div className="h-14 lg:hidden flex flex-col justify-center pt-2">
              <p className="font-extralight text-slate-400 normal-case pb-4">Step {`${questionIndex + 1}`} of 12</p>
              <div className="h-1 bg-slate-300 rounded-sm relative">
                <span className={`absolute left-0 h-full ${questionIndex === 11 ? "w-full" : `w-${questionIndex + 1}/12`} bg-blue-500`} />
              </div>
            </div>
            <div className="grid grid-rows-6 gap-5 lg:grid-cols-2 lg:grid-rows-5 lg:gap-3">
              {innovationQuizQuestions?.map((q, i) => {
                if (i === questionIndex) {
                  isGreaterThan4 = q.answers.length > 4;
                  return (
                    <>
                      <div className="py-2 h-24 flex items-center lg:w-1/2 lg:text-2xl lg:my-4 lg:col-span-2">{q.text}</div>
                      {q.answers.map((a, i) => {
                        return (
                          <div className="flex items-center h-full">
                            <div className="border border-blue-200 hover:border-blue-500 py-4 h-full w-full flex justify-start items-center">
                              <CheckCircleIcon className="w-12 text-blue-200 mx-2" />
                              <p className="text-base">{a.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                }
              })}
              <div className={`h-24 flex justify-start items-center ${isGreaterThan4 ? "lg:row-start-5" : "lg:row-start-4"}`}>
                <button
                  className="flex justify-center items-center w-1/5 h-3/5 mr-4 text-slate-300 active:text-blue-500 border active:border-blue-500"
                  onClick={() => {
                    setQuestionIndex((prev) => {
                      return prev === 0 ? 0 : prev - 1;
                    });
                  }}
                >
                  <ChevronLeftIcon className="w-10" />
                </button>
                <button
                  className="w-4/5 h-3/5 py-2 flex justify-center items-center border active:border-blue-500 text-slate-300 active:text-blue-500"
                  onClick={() => {
                    setQuestionIndex((prev) => {
                      return prev === 11 ? 11 : prev + 1;
                    });
                    if (questionIndex === 11) console.log("submit");
                  }}
                >
                  <p className="font-bold text-xl mr-4">{questionIndex === 11 ? "Submit" : "Next"}</p> <ChevronRightIcon className="w-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
