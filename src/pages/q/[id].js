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

  useEffect(() => {
    console.log("hojaa");
  }, [flag]);

  context = useContext(AnswersContext);

  let { answers, setAnswers } = context;

  context = useContext(UserContext);

  let { user, setUser } = context;

  let ans = answers.filter((answer) => answer.qid === question.id);

  const handleRating = () => {
    console.log(user);
    user.rate(question);
    console.log(question.rating);
    setFlag(!flag);
  };

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={`${styles.contentWrapper} ${lato.className}`}>
        <div className={styles.questionBox}>
          <div className={styles.questionWrapper}>
            <div className={styles.questionTitle}>{question.title}</div>
            <div className={styles.questionDescription}>
              {question.description}
            </div>
            <div className={styles.tagBox}>
              {question.tags.map((tag, idx) => {
                return (
                  <a href="#" className={styles.tag} key={idx}>
                    #{tag}
                  </a>
                );
              })}{" "}
            </div>
            <div className={styles.bottomBar}>
              <Link
                href={"/ans/" + question.id + "/add_answer"}
                className={styles.answerButton}
              >
                Add Answer
              </Link>
            </div>
          </div>

          <div className={styles.questionSideBox}>
            <div className={styles.ratingWrapper} onClick={handleRating}>
              <span className={styles.rating}>{question.rating}</span>
              <Image
                src="/star.png"
                alt="rating-icon"
                width={50}
                height={50}
                className={styles.icon}
              ></Image>
            </div>
            <div className={styles.infoWrapper}>
              <span>{question.ownerName}</span>
              <span>1 day ago</span>
            </div>
          </div>
        </div>

        <div className={styles.answersBox}>
          {ans.map((a, idx) => {
            return <AnswerCard key={idx} answer={a}></AnswerCard>;
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
