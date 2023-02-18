import { UserContext } from "@/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import styles from "./AnswerCard.module.css";

const AnswerCard = ({ answer, id }) => {
  const [flag, setFlag] = useState(false);

  let context = useContext(UserContext);
  let { user, setUser } = context;

  useEffect(() => {
    handleAnswerDisplay();
  }, []);

  useEffect(() => {}, [flag]);

  const handleUpvote = () => {
    user.upvote(answer);
    setFlag(!flag);
  };

  const handleDownvote = () => {
    user.downvote(answer);
    setFlag(!flag);
  };

  const handleAnswerDisplay = () => {
    const element = document.createElement("div");
    element.innerHTML = answer.content;
    const content = document.getElementById("content" + id);
    content.innerHTML = "";
    content.append(element);
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
        <div className={styles.content} id={"content" + id}></div>
      </div>
      <div className={styles.bookmarkDesign}></div>
    </div>
  );
};

export default AnswerCard;
