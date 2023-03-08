import styles from "./AnswerForm.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import handleAnswerSubmit from "@/helper/handleAnswerSubmit";
import Router from "next/router";
import { useContext, useRef, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";

const AnswerForm = ({ qId }) => {
  const [answers, setAnswers] = useLocalStorage("answers", new Map());
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  const question = questions.get(+qId);
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
    <div className={styles.answerBox}>
      <div className={styles.topBar}>Type your answer below</div>
      <div className={styles.textArea}>
        <div id="answerArea" className={styles.answerArea} ref={answerArea}>
          <textarea
            className={styles.text}
            onChange={(e) => setContent(e.target.value)}
            defaultValue={content}
          ></textarea>
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
            setAnswers(new Map(Array.from(answers.entries())));
            setQuestions(new Map(Array.from(questions.entries())));
            const tempUser = {
              ...user,
              answered: [...user.answered, new_answer.id],
            };
            setUser(tempUser);
            Router.push("/q/" + question.id);
          }}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default AnswerForm;
