import styles from "./FeedBox.module.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import questionFilter from "@/helper/questionFilter";
import sortQuestionArray from "@/helper/sortQuestionArray";
import lato from "@/data/latoFont";
import { SearchContext } from "@/contexts/SearchContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState, useContext } from "react";
import SkeletonCard from "@/components/SkeletonCard/SkeletonCard";

const FeedBox = () => {
  const [displayFeed, setDisplayFeed] = useState(false);

  const skeletonLoader = [
    <SkeletonCard key={1}></SkeletonCard>,
    <SkeletonCard key={2}></SkeletonCard>,
  ];

  // search context
  const { searchText } = useContext(SearchContext);

  const search_words =
    searchText === undefined ? undefined : searchText.split(" ");

  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  let feedQuestions = questionFilter(questions, search_words);
  feedQuestions = sortQuestionArray(feedQuestions);

  useEffect(() => {
    // latency introduction in displaying feed data
    setTimeout(() => {
      setDisplayFeed(true);
    }, 3000);
  }, []);

  return (
    <div className={styles.feedBox}>
      {feedQuestions ? (
        feedQuestions.length !== 0 ? (
          displayFeed ? (
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
            skeletonLoader.map((item) => item)
          )
        ) : (
          <div className={styles.blankPageWrapper}>
            <span className={`${styles.noresultText} ${lato.className}`}>
              Sorry no results found!
            </span>
          </div>
        )
      ) : (
        <div>rahul</div>
      )}
    </div>
  );
};

export default FeedBox;
