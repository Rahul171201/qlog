import styles from "../styles/Ask.module.css";
import Navbar from "@/components/Navbar/Navbar";
import addTag from "@/helper/AddTag";
import { Lato } from "@next/font/google";
import { useContext, useEffect } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import { UserContext } from "@/contexts/UserContext";
import Question from "@/classes/Question";
import Router from "next/router";
import { SearchContext } from "@/contexts/SearchContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Ask = () => {
  let context = useContext(QuestionsContext);
  let { questions, setQuestions } = context;

  context = useContext(UserContext);
  let { user, setUser } = context;

  context = useContext(SearchContext);
  let { searchText, setSearchText } = context;

  useEffect(() => {
    setSearchText(undefined);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionTitle = e.target[0].value;

    const text = document.getElementById("display-text").innerHTML;
    const questionDescription = text;

    const questionTags = [];
    for (let i = 2; i < e.target.length; i++) {
      if (e.target[i].value !== undefined && e.target[i].value !== "")
        questionTags.push(e.target[i].value);
    }

    let newQuestion = new Question(
      questions.length,
      questionTitle,
      questionDescription,
      user.userName,
      user.userId,
      questionTags,
      new Date()
    );

    let temp_ques = questions;
    temp_ques.push(newQuestion);
    setQuestions(temp_ques);

    user.asked.push(newQuestion);

    Router.push("/feed");
  };

  const addImage = (e) => {
    e.preventDefault();
    const hiddenInput = document.getElementById("hidden-text");

    const node =
      e.target.parentNode.parentNode[0].parentNode.nextSibling.lastChild;
    console.log(node);
    const image = document.createElement("img");
    image.src = "/images/star.png";
    image.alt = "test";
    image.style.width = "30vw";
    image.style.height = "auto";
    node.append(image);
  };

  return (
    <div className={styles.askWrapper}>
      <Navbar></Navbar>
      <div className={`${styles.formWrapper} ${lato.className}`}>
        <form className={styles.questionForm} onSubmit={handleSubmit}>
          <div className={styles.titleWrapper}>
            <label className={styles.label}>Title</label>
            <input type="text" className={styles.titleInput} required></input>
          </div>
          <div className={styles.descriptionWrapper}>
            <textarea
              id="hidden-text"
              className={styles.hiddenTextArea}
            ></textarea>
            <label className={styles.label}>Description</label>
            <div
              type="submit"
              contentEditable="true"
              className={styles.descriptionInput}
              id="display-text"
            ></div>
          </div>
          <div className={styles.tagsWrapper}>
            <button onClick={(e) => addTag(e)} className={styles.addTagButton}>
              Add Tag
            </button>
          </div>
          <div className={styles.insertImageWrapper}>
            <button className={styles.insertImageButton} onClick={addImage}>
              Insert Image
            </button>
          </div>
          {/* <div>
            <input type="file" className={styles.fileInput}></input>
          </div> */}
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
