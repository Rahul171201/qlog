import "@/styles/globals.css";
import UserContextProvider from "@/contexts/UserContext";
import SearchContextProvider from "@/contexts/SearchContext";
import users from "../data/users";
import questions from "../data/questions";
import answers from "../data/answers";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.localStorage.setItem(
      "users",
      JSON.stringify(Array.from(users.entries()))
    );
    window.localStorage.setItem(
      "answers",
      JSON.stringify(Array.from(answers.entries()))
    );
    window.localStorage.setItem(
      "questions",
      JSON.stringify(Array.from(questions.entries()))
    );
  }, []);

  return (
    <UserContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </UserContextProvider>
  );
}
