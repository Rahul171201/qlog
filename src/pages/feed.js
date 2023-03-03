import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import { SearchContext } from "@/contexts/SearchContext";
import questionFilter from "@/helper/questionFilter";
import lato from "@/data/latoFont";
import sortQuestionArray from "@/helper/sortQuestionArray";
import useLocalStorage from "@/hooks/useLocalStorage";

const Feed = () => {
  useEffect(() => {
    // setSearchText(undefined);
    if (user === undefined) {
      Router.push("/login");
    }
  }, []);

  // user context
  const { user } = useContext(UserContext);
  // search context
  const { searchText } = useContext(SearchContext);

  const search_words =
    searchText === undefined ? undefined : searchText.split(" ");

  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  /**
   * FIXME:
   * Is storing data into arrays for sorted ordering performance friendly?
   */
  let feedQuestions = questionFilter(questions, search_words);
  feedQuestions = sortQuestionArray(feedQuestions);

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
