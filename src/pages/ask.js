import styles from "../styles/Ask.module.css";
import Navbar from "@/components/Navbar/Navbar";
import addTag from "@/helper/addTag";
import lato from "@/data/latoFont";
import { useContext, useEffect } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import handleQuestionSubmit from "@/helper/handleQuestionSubmit";
import { SearchContext } from "@/contexts/SearchContext";
import uploadImage from "@/helper/uploadImage";

const Ask = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const { user, setUser } = useContext(UserContext);

  const { searchText, setSearchText } = useContext(SearchContext);

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
            const [newQuestion, temp_ques] = handleQuestionSubmit(
              e,
              questions,
              user
            );
            setQuestions(temp_ques);
            let temp_user = user;
            temp_user.asked.push(newQuestion);
            setUser(temp_user);
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
            <div
              type="submit"
              contentEditable="true"
              className={styles.descriptionInput}
              id="descriptionArea"
            ></div>
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
                const node = document.getElementById("descriptionArea");
                uploadImage(e, node);
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
