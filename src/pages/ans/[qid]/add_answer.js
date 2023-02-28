import styles from "./Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";
import lato from "@/data/latoFont";
import { useContext, useRef } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import Router from "next/router";
import { AnswersContext } from "@/contexts/AnswersContext";
import { UserContext } from "@/contexts/UserContext";
import uploadImage from "@/helper/uploadImage";
import handleAnswerSubmit from "@/helper/handleAnswerSubmit";
import Description from "@/components/Description/Description";
import useLocalStorage from "@/hooks/useLocalStorage";

const AddAnswer = ({ qId }) => {
  // questions context
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  const question = questions.get(+qId);

  // answers context
  const [answers, setAnswers] = useLocalStorage("answers", new Map());
  // user context
  const { user, setUser } = useContext(UserContext);

  const answerArea = useRef();

  /**
   * FIXME:
   * DOM MANUPIULATION CORRECT?
   */
  const handleClear = () => {
    const area = answerArea.current;
    area.innerHTML = "";
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
            ref={answerArea}
          >
            {/* {imageUrl ? <ImageimgUrl={imageUrl} /> : null}
            {text} */}
          </div>
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
              const new_answer = handleAnswerSubmit(
                answers,
                user,
                question,
                answerArea
              );
              answers.set(new_answer.id, new_answer);
              user.answered.push(new_answer);
              setAnswers(answers);
              setUser(user);
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
