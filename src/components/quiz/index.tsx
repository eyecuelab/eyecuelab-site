import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import illustrationQuiz from "../../assets/Illsutration_Quiz.svg";
import useInnovationQuizData from "./useInnovationQuizData";

export default function InnovationAssessment() {
  const [innovationQuizData, innovationQuizQuestions] = useInnovationQuizData();
  const [questionIndex, setQuestionIndex] = useState(0);
  console.log(innovationQuizQuestions);

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
        <div className="bg-white w-full">
          <div className="w-[95vw] h-full mx-auto pt-36 block">
            <p className="font-extralight text-slate-400 normal-case">Step {`${questionIndex + 1}`} of 12</p>
            <div className="border h-1 bg-slate-300 mt-2 rounded-sm relative">
              <span className={`absolute left-0 h-full ${questionIndex === 11 ? "w-full" : `w-${questionIndex + 1}/12`} bg-blue-500`} />
            </div>
            <div className="mt-4 grid grid-rows-6 gap-5">
              {innovationQuizQuestions?.map((q, i) => {
                if (i === questionIndex) {
                  return (
                    <>
                      <div className="py-2 h-24 flex items-center">{q.text}</div>
                      {q.answers.map((a, i) => {
                        return (
                          <>
                            <div className="border border-blue-200 hover:border-blue-500 py-4 h-24 flex justify-start items-center">
                              <CheckCircleIcon className="w-12 text-blue-200 mx-2" />
                              <p className="text-sm">{a.text}</p>
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                }
              })}
              <div className="h-24 flex justify-start items-center">
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
