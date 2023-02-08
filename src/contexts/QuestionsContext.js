import { createContext, useState } from "react";
import ques from "../data/questions";

export const QuestionsContext = createContext();

const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(ques);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
