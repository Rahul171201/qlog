import ImageComponent from "../ImageComponent/ImageComponent";
import styles from "./QuestionForm.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import handleQuestionSubmit from "@/helper/handleQuestionSubmit";
import lato from "@/data/latoFont";
import { useContext, useState } from "react";
import TagField from "../TagField/TagField";

const QuestionForm = () => {
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  // user context
  const { user, setUser } = useContext(UserContext);

  const [attachments, setAttachments] = useState([]);

  const [tags, setTags] = useState([]);

  const addTag = () => {
    setTags([...tags, <TagField key={tags.length}></TagField>]);
  };

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <form
        className={styles.questionForm}
        onSubmit={(e) => {
          const newQuestion = handleQuestionSubmit(
            e,
            questions,
            user,
            attachments,
            tags
          );
          questions.set(newQuestion.id, newQuestion);
          console.log(questions);
          setQuestions(new Map(Array.from(questions.entries())));
          user.asked.push(newQuestion.id);
          setUser(user);
          Router.push("/feed");
        }}
      >
        <div className={styles.titleWrapper}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            id="title"
            type="text"
            className={styles.titleInput}
            required
          ></input>
        </div>
        <div className={styles.descriptionWrapper}>
          <label htmlFor="descriptionArea" className={styles.label}>
            Description
          </label>
          <div type="submit" className={styles.descriptionArea}>
            <textarea className={styles.descriptionInput}></textarea>
            {attachments.map((attachment, index) => {
              return (
                <ImageComponent key={index} src={attachment}></ImageComponent>
              );
            })}
          </div>
        </div>
        <div className={styles.tagsWrapper}>
          {tags.map((tag) => tag)}
          <button className={styles.addTagButton} onClick={addTag}>
            Add Tag
          </button>
        </div>
        <div className={styles.fileInputWrapper}>
          <label htmlFor="uploadImageButton" className={styles.fileInputButton}>
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
            className={styles.fileInput}
            id="uploadImageButton"
            accept="image/*"
          ></input>
        </div>
        <div className={styles.submitButtonWrapper}>
          <button className={styles.submitButton} type="submit">
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
