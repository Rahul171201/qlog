import styles from "./Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";
import lato from "@/data/latoFont";
import { useContext, useRef, useState } from "react";
import Router from "next/router";
import { UserContext } from "@/contexts/UserContext";
import handleAnswerSubmit from "@/helper/handleAnswerSubmit";
import useLocalStorage from "@/hooks/useLocalStorage";
import ImageComponent from "@/components/ImageComponent/ImageComponent";

const AddAnswer = ({ qId }) => {
  // questions context
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  const question = questions.get(+qId);

  // answers context
  const [answers, setAnswers] = useLocalStorage("answers", new Map());
  // user context
  const { user, setUser } = useContext(UserContext);

  // to store the answer content
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState([]);

  const answerArea = useRef();

  const handleClear = () => {
    setContent("");
  };

  return (
    <div className={`${styles.answerWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.questionWrapper}>
        <div className={styles.questionTitle}>{question.title}</div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>
          {question.description}
          {question.attachments.map((attachment, index) => {
            return (
              <ImageComponent key={index} src={attachment}></ImageComponent>
            );
          })}
        </div>
        <div className={styles.infoBar}>
          <span>{question.ownerName}</span>
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={styles.topBar}>Type your answer below</div>
        <div className={styles.textArea}>
          <div id="answerArea" className={styles.answerArea} ref={answerArea}>
            <textarea
              className={styles.text}
              onChange={(e) => setContent(e.target.value)}
            >
              {content}
            </textarea>
            {attachments.map((attachment, index) => {
              return (
                <ImageComponent key={index} src={attachment}></ImageComponent>
              );
            })}
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
                const uploadImageButton = e.target;
                let reader = new FileReader();
                reader.readAsDataURL(uploadImageButton.files[0]);
                reader.onload = () => {
                  setAttachments([...attachments, reader.result]);
                };
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
                content,
                attachments
              );
              answers.set(new_answer.id, new_answer);
              question.answers.push(new_answer.id);
              user.answered.push(new_answer.id);
              setAnswers(new Map(Array.from(answers.entries())));
              setQuestions(new Map(Array.from(questions.entries())));
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
