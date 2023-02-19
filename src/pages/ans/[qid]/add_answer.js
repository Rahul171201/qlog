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

  const handleSubmit = () => {
    let total_answers = answers.length;
    let id = total_answers;

    const answer = document.getElementById("answerArea").innerHTML;

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

  const handleClear = () => {
    document.getElementById("answerArea").innerHTML = "";
  };

  const uploadImage = (e) => {
    const node = document.getElementById("answerArea");

    const fileInput = document.getElementById("fileInput");

    let reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => {
      const image = document.createElement("img");
      image.src = reader.result;
      image.alt = "answer-image";
      image.style.width = "30vw";
      image.style.height = "auto";
      image.style.display = "block";
      node.append(image);
    };
    e.target.value = "";
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
          <div
            contentEditable="true"
            className={styles.text}
            id="answerArea"
          ></div>
        </div>
        <div className={styles.bottomBar}>
          <button className={styles.clearallButton} onClick={handleClear}>
            CLEAR
          </button>
          <div className={styles.uploadButtonWrapper}>
            <label for="fileInput" className={styles.uploadButton}>
              Upload Image
            </label>
            <input
              onChange={uploadImage}
              type="file"
              accept="image/*"
              id="fileInput"
              className={styles.fileInput}
            ></input>
          </div>

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
