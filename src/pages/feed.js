import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import { SearchContext } from "@/contexts/SearchContext";
import QuestionFilter from "@/helper/questionFilter";
import { Lato } from "@next/font/google";
import sortQuestionArray from "@/helper/sortQuestionArray";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Feed = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const { user, setUser } = useContext(UserContext);

  const { searchText, setSearchText } = useContext(SearchContext);

  const search_words =
    searchText === undefined ? undefined : searchText.split(" ");

  let feedQuestions = QuestionFilter(questions, search_words);
  feedQuestions = sortQuestionArray(feedQuestions);

  useEffect(() => {
    if (user === undefined) {
      Router.push("/login");
    }
  }, []);
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.feedWrapper}>
        <div className={styles.feedBox}>
          {feedQuestions.length !== 0 ? (
            feedQuestions.map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  q={question}
                  id={question.id}
                ></QuestionCard>
              );
            })
          ) : (
            <div className={styles.blankPageWrapper}>
              <span className={`${styles.noresultText} ${lato.className}`}>
                Sorry no results found!
              </span>
            </div>
          )}
        </div>
        <Sidebar></Sidebar>
      </div>
    </main>
  );
};

export default Feed;
