import styles from "./Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";

import { Lato } from "@next/font/google";
import { useContext, useState } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import Router from "next/router";
import { AnswersContext } from "@/contexts/AnswersContext";
import Answer from "@/classes/Answer";
import { UserContext } from "@/contexts/UserContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const AddAnswer = ({ qId }) => {
  let context = useContext(QuestionsContext);
  let { questions, setQuestions } = context;

  let question;
  questions.forEach((q) => {
    if (q.id === +qId) {
      question = q;
    }
  });

  context = useContext(AnswersContext);
  let { answers, setAnswers } = context;

  context = useContext(UserContext);
  let { user, setUser } = context;

  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
    console.log(answer);
  };

  const handleSubmit = () => {
    let total_answers = answers.length;
    let id = total_answers;
    let new_answer = new Answer(
      id,
      user.userId,
      user.userName,
      answer,
      question.id,
      new Date()
    );

    let temp_answers = answers;
    temp_answers.push(new_answer);
    setAnswers(temp_answers);

    question.answers.push(new_answer);

    let temp_user = user;
    temp_user.answered.push(new_answer);
    setUser(temp_user);
    Router.push("/q/" + question.id);
  };

  return (
    <div className={`${styles.answerWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.questionWrapper}>
        <div className={styles.questionTitle}>{question.title}</div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>{question.description}</div>
        <div className={styles.infoBar}>
          <span>{question.ownerName}</span>
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={styles.topBar}>Type your answer below</div>
        <div className={styles.textArea}>
          <textarea
            className={styles.text}
            onChange={handleChange}
            value={answer}
          ></textarea>
        </div>
        <div className={styles.bottomBar}>
          <button className={styles.clearallButton}>CLEAR</button>
          <button className={styles.postButton} onClick={handleSubmit}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  return {
    props: {
      qId: params.qid,
    },
  };
}

export default AddAnswer;
