import styles from "./Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";
import lato from "@/data/latoFont";
import { useContext } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import Router from "next/router";
import { AnswersContext } from "@/contexts/AnswersContext";
import { UserContext } from "@/contexts/UserContext";
import uploadImage from "@/helper/uploadImage";
import handleAnswerSubmit from "@/helper/handleAnswerSubmit";
import Description from "@/components/Description/Description";

const AddAnswer = ({ qId }) => {
  // questions context
  const { questions, setQuestions } = useContext(QuestionsContext);

  let question;
  questions.forEach((q) => {
    if (q.id === +qId) {
      question = q;
    }
  });

  // answers context
  const { answers, setAnswers } = useContext(AnswersContext);
  // user context
  const { user, setUser } = useContext(UserContext);

  /**
   * FIXME:
   * DOM MANUPIULATION CORRECT?
   */
  const handleClear = () => {
    document.getElementById("answerArea").innerHTML = "";
  };

  return (
    <div className={`${styles.answerWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.questionWrapper}>
        <div className={styles.questionTitle}>{question.title}</div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>
          <Description desc={question.description}></Description>
        </div>
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
            <label htmlFor="fileInput" className={styles.uploadButton}>
              Upload Image
            </label>
            <input
              onChange={(e) => {
                const node = document.getElementById("answerArea");
                uploadImage(e, node);
              }}
              type="file"
              accept="image/*"
              id="fileInput"
              className={styles.fileInput}
            ></input>
          </div>

          <button
            className={styles.postButton}
            onClick={() => {
              const [temp_answers, temp_question, temp_user] =
                handleAnswerSubmit(answers, user, question);
              question = temp_question;
              setAnswers(temp_answers);
              setUser(temp_user);
              Router.push("/q/" + question.id);
            }}
          >
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
