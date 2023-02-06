import styles from "./AnswerCard.module.css";
import Image from "next/image";

const AnswerCard = () => {
  return (
    <div className={styles.answerWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.upVote}>
          <span className={styles.upvoteCount}>363</span>
        </div>
        <div className={styles.downVote}>
          <span className={styles.downvoteCount}>15</span>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.header}>
          <span>Rahul Roy</span>
          <span>12 hours ago</span>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.content}>
          Lorem ipsum hai bina detool ke paani jisse dhoya na jaa sake woh
          banegi ek raani kuc bhi bolna ho toh bol do koi nahi soch rha bolte
          waqt hum kisi bhi trake se nahi jaante tumhra appa kon hai mein bas
          itna janat hun ki hum benasseb hein aur kuch nahijam jam jam chma cham
          cham pum pum pum rol ol rol
        </div>
      </div>
      <div className={styles.bookmarkDesign}></div>
    </div>
  );
};

export default AnswerCard;
