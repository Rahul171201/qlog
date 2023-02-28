import { UserContext } from "@/contexts/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useContext, useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import styles from "./AnswerCard.module.css";

const AnswerCard = ({ answer, id }) => {
  const [flag, setFlag] = useState(false);

  //user context
  const { user, setUser } = useContext(UserContext);

  const [users, setUsers] = useLocalStorage("users", []);

  const handleUpvote = () => {
    user.upvote(answer);
    setFlag(!flag);
  };

  const handleDownvote = () => {
    user.downvote(answer);
    setFlag(!flag);
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
