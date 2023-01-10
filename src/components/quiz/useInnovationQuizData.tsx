import React, { useEffect, useState } from "react";
import axios from "axios";
import { innovationQuizQuestions } from "./types/innovationQuiz";

export default function useInnovationQuizData() {
  const [innovationQuizData, setInnovationQuizData] = useState(null);
  const [innovationQuizQuestions, setInnovationQuizQuestions] = useState<innovationQuizQuestions[]>([]);

  useEffect(() => {
    axios
      .get("https://eyecue-assessment-api-prod-2vrnr5sczq-uw.a.run.app/data")
      .then((data) => {
        setInnovationQuizData(data.data.data);
        setInnovationQuizQuestions(
          data.data.data.flatMap((d: any) => {
            return d.questions;
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return [innovationQuizData, innovationQuizQuestions];
}
