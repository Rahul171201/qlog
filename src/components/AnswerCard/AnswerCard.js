import { UserContext } from "@/contexts/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useContext, useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import styles from "./AnswerCard.module.css";
import handleUpvote from "@/helper/handleUpvote";
import handleDownvote from "@/helper/handleDownvote";

// Answer Card component
const AnswerCard = ({ answer, id }) => {
  //user context
  const { user, setUser } = useContext(UserContext);

  const [users, setUsers] = useLocalStorage("users", new Map());
  const [answers, setAnswers] = useLocalStorage("answers", new Map());

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.leftBox}>
        <div
          className={styles.upVote}
          onClick={() => {
            handleUpvote(user, answer, users, answers);
            setUsers(new Map(Array.from(users.entries())));
            setAnswers(new Map(Array.from(answers.entries())));
          }}
        >
          <span className={styles.upvoteCount}>{answer.upvotes}</span>
        </div>
        <div
          className={styles.downVote}
          onClick={() => {
            handleDownvote(user, answer, users, answers);
            setUsers(new Map(Array.from(users.entries())));
            setAnswers(new Map(Array.from(answers.entries())));
          }}
        >
          <span className={styles.downvoteCount}>{answer.downvotes}</span>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.header}>
          <span>{answer.ownerName}</span>
          <span>2 days ago</span>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.content} id={"content" + id}>
          {answer.content}
          {answer.attachments.map((attachment, index) => {
            return (
              <ImageComponent src={attachment} key={index}></ImageComponent>
            );
          })}
        </div>
      </div>
      <div className={styles.bookmarkDesign}></div>
    </div>
  );
};

export default AnswerCard;
