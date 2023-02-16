import styles from "../styles/Ask.module.css";
import Navbar from "@/components/Navbar/Navbar";

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

  const removeTag = (e) => {
    e.remove();
  };

  const addTag = (e) => {
    e.preventDefault();
    const parentElement = e.target.parentNode;
    const newElement = document.createElement("div");
    const inputElement = document.createElement("input");
    const deleteButton = document.createElement("button");
    inputElement.style.width = "160px";
    inputElement.style.height = "40px";
    inputElement.style.padding = "10px";
    inputElement.type = "text";
    inputElement.required = "true";
    deleteButton.style.width = "30px";
    deleteButton.style.height = "30px";
    deleteButton.style.backgroundColor = "#B73E3E";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "50%";
    deleteButton.style.color = "white";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.fontSize = "1.5rem";
    deleteButton.onmouseenter = (e) => {
      e.target.style.backgroundColor = "#DD5353";
    };
    deleteButton.onmouseleave = (e) => {
      e.target.style.backgroundColor = "#B73E3E";
    };
    deleteButton.onclick = (e) => {
      removeTag(e.target.parentNode);
    };
    deleteButton.style.display = "flex";
    deleteButton.style.justifyContent = "center";
    deleteButton.style.alignItems = "center";
    deleteButton.innerHTML = "-";
    newElement.append(inputElement);
    newElement.append(deleteButton);
    newElement.style.display = "flex";
    newElement.style.width = "200px";
    newElement.style.justifyContent = "space-between";
    newElement.style.alignItems = "center";
    newElement.style.marginBottom = "20px";
    parentElement.prepend(newElement);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionTitle = e.target[0].value;
    const questionDescription = e.target[1].value;
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
            <label className={styles.label}>Description</label>
            <textarea className={styles.descriptionInput}></textarea>
          </div>
          <div className={styles.tagsWrapper}>
            <button onClick={addTag} className={styles.addTagButton}>
              Add Tag
            </button>
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
