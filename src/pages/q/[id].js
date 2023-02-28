import Navbar from "@/components/Navbar/Navbar";
import styles from "./Question.module.css";
import Image from "next/image";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import lato from "@/data/latoFont";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";
import sortAnswerArray from "@/helper/sortAnswerArray";
import QuestionDescription from "@/components/Description/Description";
import useLocalStorage from "@/hooks/useLocalStorage";

const Question = ({ qId }) => {
  const [questions, setQuestions] = useLocalStorage("questions", new Map());
  // const [answers, setAnswers] = useLocalStorage("answers", new Map());
  // const [users, setUsers] = useLocalStorage("users", new Map());

  // current question
  const question = questions.get(+qId);

  const [flag, setFlag] = useState(0);

  const ans = sortAnswerArray(question.answers);

  const [answerGiven, setAnswerGiven] = useState(false);
  const [questionAsked, setQuestionAsked] = useState(false);

  const [counter, setCounter] = useState(1);

  // user context
  const { user, setUser } = useContext(UserContext);
  // search context
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    user.answered.forEach((a) => {
      if (a.qid === +qId) {
        setAnswerGiven(true);
      }
    });
    if (question.ownerId === user.userId) {
      setQuestionAsked(true);
    }
  }, []);

  /**
   * FIXME: Here we require to do dom manipulation or there is another way?
   */
  const handleRating = (e) => {
    const icon = document.getElementById("icon");
    if (icon) {
      const multiplier = counter * 360;

      icon.style.transform = `rotate(${multiplier}deg)`;
      setCounter(counter + 1);
    }

    user.rate(question);
    setFlag(!flag);
  };

  const handleTagSubmit = (e) => {
    const tagData = e.target.innerHTML.substr(1, e.target.innerHTML.length);
    setSearchText(tagData);
    Router.push("/feed");
  };

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={`${styles.contentWrapper} ${lato.className}`}>
        <div className={styles.questionBox}>
          <div className={styles.questionWrapper}>
            <div className={styles.questionTitle}>{question.title}</div>
            <div id="description" className={styles.questionDescription}>
              <QuestionDescription
                desc={question.description}
              ></QuestionDescription>
            </div>
            <div className={styles.tagBox}>
              {question.tags.map((tag, idx) => {
                return (
                  <div
                    onClick={handleTagSubmit}
                    href="#"
                    className={styles.tag}
                    key={idx}
                  >
                    #{tag}
                  </div>
                );
              })}
            </div>
            <div className={styles.bottomBar}>
              {answerGiven || questionAsked ? (
                <></>
              ) : (
                <div className={styles.answerButtonWrapper}>
                  <Link
                    href={"/ans/" + question.id + "/add_answer"}
                    className={styles.answerButton}
                  >
                    Add Answer
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className={styles.questionSideBox}>
            <div className={styles.ratingWrapper} onClick={handleRating}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/star.png"
                  alt="rating-icon"
                  width={50}
                  height={50}
                  className={styles.icon}
                  id="icon"
                ></Image>
              </div>
              <div className={styles.tempWrapper}>
                <span className={styles.rating}>{question.rating}</span>
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <span>{question.ownerName}</span>
              <span>1 day ago</span>
            </div>
          </div>
        </div>

        <div className={styles.answersBox}>
          {ans.map((a, idx) => {
            return <AnswerCard key={idx} answer={a} id={a.id}></AnswerCard>;
          })}
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      qId: params.id,
    },
  };
}

export default Question;
