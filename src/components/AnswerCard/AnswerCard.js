import styles from "./AnswerCard.module.css";
import Image from "next/image";

const AnswerCard = ({ answer }) => {
  console.log(answer);

  return (
    <div className={styles.answerWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.upVote}>
          <span className={styles.upvoteCount}>{answer.upvotes}</span>
        </div>
        <div className={styles.downVote}>
          <span className={styles.downvoteCount}>{answer.downvotes}</span>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.header}>
          <span>{answer.ownerName}</span>
          <span>2 days ago</span>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.content}>{answer.content}</div>
      </div>
      <div className={styles.bookmarkDesign}></div>
    </div>
  );
};

export default AnswerCard;
