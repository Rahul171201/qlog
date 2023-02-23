import Navbar from "@/components/Navbar/Navbar";
import styles from "./Question.module.css";
import Image from "next/image";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import lato from "@/data/latoFont";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "@/contexts/AnswersContext";
import { UserContext } from "@/contexts/UserContext";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import Link from "next/link";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";
import sortAnswerArray from "@/helper/sortAnswerArray";
import QuestionDescription from "@/components/Description/Description";

const Question = ({ qId }) => {
  // questions context
  const { questions, setQuestions } = useContext(QuestionsContext);

  // current question
  let question;
  questions.forEach((q) => {
    if (q.id === +qId) question = q;
  });

  const [flag, setFlag] = useState(0);

  // answers context
  const { answers, setAnswers } = useContext(AnswersContext);
  // user context
  const { user, setUser } = useContext(UserContext);

  let ans = answers.filter((answer) => answer.qid === question.id);
  ans = sortAnswerArray(ans);

  const [answerGiven, setAnswerGiven] = useState(false);
  const [questionAsked, setQuestionAsked] = useState(false);

  const [counter, setCounter] = useState(1);

  // search context
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    user.answered.forEach((a) => {
      if (a.qid === +qId) {
        setAnswerGiven(true);
      }
    });
    if (question.ownerId === user.userId) {
      setAnswerGiven(true);
    }
  }, []);

  /**
   * FIXME: Here we require to do dom maupulation or there is another way?
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
