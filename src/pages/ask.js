import styles from "../styles/Ask.module.css";
import Navbar from "@/components/Navbar/Navbar";
import addTag from "@/helper/addTag";
import lato from "@/data/latoFont";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import handleQuestionSubmit from "@/helper/handleQuestionSubmit";
import { SearchContext } from "@/contexts/SearchContext";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import useLocalStorage from "@/hooks/useLocalStorage";

const Ask = () => {
  const [questions, setQuestions] = useLocalStorage("questions", new Map());

  // user context
  const { user, setUser } = useContext(UserContext);
  // search context
  const { searchText, setSearchText } = useContext(SearchContext);

  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    setSearchText(undefined);
  }, []);

  return (
    <div className={styles.askWrapper}>
      <Navbar></Navbar>
      <div className={`${styles.formWrapper} ${lato.className}`}>
        <form
          className={styles.questionForm}
          onSubmit={(e) => {
            const newQuestion = handleQuestionSubmit(
              e,
              questions,
              user,
              attachments
            );
            questions.set(newQuestion.id, newQuestion);
            console.log(questions);
            setQuestions(new Map(Array.from(questions.entries())));
            user.asked.push(newQuestion);
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
                  // <div key={index}>ok</div>
                  <ImageComponent key={index} src={attachment}></ImageComponent>
                );
              })}
            </div>
          </div>
          <div className={styles.tagsWrapper}>
            <button onClick={(e) => addTag(e)} className={styles.addTagButton}>
              Add Tag
            </button>
          </div>
          <div className={styles.fileInputWrapper}>
            <label
              htmlFor="uploadImageButton"
              className={styles.fileInputButton}
            >
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
    </div>
  );
};

export default Ask;
