import "@/styles/globals.css";
import UserContextProvider from "@/contexts/UserContext";
import RegisteredUsersContextProvider from "@/contexts/RegisteredUsersContext";
import QuestionsContextProvider from "@/contexts/QuestionsContext";
import AnswersContextProvider from "@/contexts/AnswersContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <RegisteredUsersContextProvider>
        <QuestionsContextProvider>
          <AnswersContextProvider>
            <Component {...pageProps} />
          </AnswersContextProvider>
        </QuestionsContextProvider>
      </RegisteredUsersContextProvider>
    </UserContextProvider>
  );
}
