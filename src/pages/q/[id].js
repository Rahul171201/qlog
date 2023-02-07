import Navbar from "@/components/Navbar/Navbar";
import styles from "./Question.module.css";
import Image from "next/image";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import { Lato } from "@next/font/google";
import questions from "../../data/questions";
import answers from "../../data/answers";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const getStaticPaths = () => {
  const paths = questions.map((q) => {
    return {
      params: { id: q.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;
  let myQuestion;
  questions.forEach((q) => {
    if (q.id.toString() === id) {
      myQuestion = q;
    }
  });
  myQuestion = JSON.stringify(myQuestion);
  return {
    props: {
      question: myQuestion,
    },
  };
};

const Question = ({ question }) => {
  question = JSON.parse(question);

  let ans = answers.filter((answer) => answer.qid === question.id);

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
          </div>

          <div className={styles.questionSideBox}>
            <div className={styles.ratingWrapper}>
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
              <span>{question.date}</span>
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

export default Question;
