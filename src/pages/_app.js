import "@/styles/globals.css";
import UserContextProvider from "@/contexts/UserContext";
import RegisteredUsersContextProvider from "@/contexts/RegisteredUsersContext";
import QuestionsContextProvider from "@/contexts/QuestionsContext";
import AnswersContextProvider from "@/contexts/AnswersContext";
import SearchContextProvider from "@/contexts/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <RegisteredUsersContextProvider>
        <QuestionsContextProvider>
          <AnswersContextProvider>
            <SearchContextProvider>
              <Component {...pageProps} />
            </SearchContextProvider>
          </AnswersContextProvider>
        </QuestionsContextProvider>
      </RegisteredUsersContextProvider>
    </UserContextProvider>
  );
}
