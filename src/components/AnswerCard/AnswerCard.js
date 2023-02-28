import { UserContext } from "@/contexts/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useContext, useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import styles from "./AnswerCard.module.css";

const AnswerCard = ({ answer, id }) => {
  //user context
  const { user, setUser } = useContext(UserContext);

  const [users, setUsers] = useLocalStorage("users", new Map());
  const [answers, setAnswers] = useLocalStorage("answers", new Map());

  const handleUpvote = () => {
    const currentUser = users.get(user.userId);
    const currentAnswer = answers.get(answer.id);
    if (currentUser.hasDownvoted.includes(answer.id)) {
      currentAnswer.downvotes--;
      currentAnswer.upvotes++;
      answer.downvotes--;
      answer.upvotes++;
      const index = currentUser.hasDownvoted.indexOf(answer.id);
      if (index > -1) currentUser.hasDownvoted.splice(index, 1);
      currentUser.hasUpvoted.push(answer.id);
    } else if (currentUser.hasUpvoted.includes(answer.id)) {
      currentAnswer.upvotes--;
      answer.upvotes--;
      const index = currentUser.hasUpvoted.indexOf(answer.id);
      if (index > -1) currentUser.hasUpvoted.splice(index, 1);
    } else {
      currentAnswer.upvotes++;
      answer.upvotes++;
      currentUser.hasUpvoted.push(answer.id);
    }

    setUsers(new Map(Array.from(users.entries())));
    setAnswers(new Map(Array.from(answers.entries())));
  };

  const handleDownvote = () => {
    const currentUser = users.get(user.userId);
    const currentAnswer = answers.get(answer.id);
    if (currentUser.hasUpvoted.includes(answer.id)) {
      currentAnswer.downvotes++;
      currentAnswer.upvotes--;
      answer.downvotes++;
      answer.upvotes--;
      const index = currentUser.hasUpvoted.indexOf(answer.id);
      if (index > -1) currentUser.hasUpvoted.splice(index, 1);
      currentUser.hasDownvoted.push(answer.id);
    } else if (currentUser.hasDownvoted.includes(answer.id)) {
      currentAnswer.downvotes--;
      answer.downvotes--;
      const index = currentUser.hasDownvoted.indexOf(answer.id);
      if (index > -1) currentUser.hasDownvoted.splice(index, 1);
    } else {
      currentAnswer.downvotes++;
      answer.downvotes++;
      currentUser.hasDownvoted.push(answer.id);
    }

    setUsers(new Map(Array.from(users.entries())));
    setAnswers(new Map(Array.from(answers.entries())));
  };

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.upVote} onClick={handleUpvote}>
          <span className={styles.upvoteCount}>{answer.upvotes}</span>
        </div>
        <div className={styles.downVote} onClick={handleDownvote}>
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
