export interface answersPayload {
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  answer: [{ question_id: string; answer_indexes: number[] }];
}

export interface innovationQuizData {
  id: string;
  text: string;
  questions: [{ id: string; multiselect: string; text: string; answers: [{ feedback: string; text: string }] }];
}

export interface innovationQuizQuestions {
  id: string;
  multiselect: string;
  text: string;
  answers: [{ feedback: string; text: string }];
}
