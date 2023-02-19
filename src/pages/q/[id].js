import Navbar from "@/components/Navbar/Navbar";
import styles from "./Question.module.css";
import Image from "next/image";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import { Lato } from "@next/font/google";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "@/contexts/AnswersContext";
import { UserContext } from "@/contexts/UserContext";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import Link from "next/link";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";
import handleDescriptionDisplay from "@/helper/HandleDescriptionDisplay";
import sortAnswerArray from "@/helper/SortAnswerArray";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Question = ({ qId }) => {
  let context = useContext(QuestionsContext);
  let { questions, setQuestions } = context;

  let question;
  questions.forEach((q) => {
    if (q.id === +qId) question = q;
  });

  const [flag, setFlag] = useState(0);

  context = useContext(AnswersContext);

  let { answers, setAnswers } = context;

  context = useContext(UserContext);

  let { user, setUser } = context;

  let ans = answers.filter((answer) => answer.qid === question.id);
  ans = sortAnswerArray(ans);

  const [answerGiven, setAnswerGiven] = useState(false);
  const [questionAsked, setQuestionAsked] = useState(false);

  context = useContext(SearchContext);
  let { searchText, setSearchText } = context;

  useEffect(() => {
    handleDescriptionDisplay(question.description);
    user.answered.forEach((a) => {
      if (a.qid === +qId) {
        setAnswerGiven(true);
      }
    });
    if (question.ownerId === user.userId) {
      setAnswerGiven(true);
    }
  }, []);

  const handleRating = () => {
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
            <div id="description" className={styles.questionDescription}></div>
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
              })}{" "}
            </div>
            <div className={styles.bottomBar}>
              {answerGiven || questionAsked ? (
                <></>
              ) : (
                <Link
                  href={"/ans/" + question.id + "/add_answer"}
                  className={styles.answerButton}
                >
                  Add Answer
                </Link>
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
