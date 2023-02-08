import { createContext, useState } from "react";
import ans from "../data/answers";

export const AnswersContext = createContext();

const AnswersContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState(ans);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};

export default AnswersContextProvider;
