import styles from "./QuestionCard.module.css";
import { Lato } from "@next/font/google";
import Link from "next/link";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const QuestionCard = (props) => {
  return (
    <Link href={"/q/" + props.q.id} className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <div className={styles.questionTitle}>
          <span>{props.q.title}</span>
          <div className={styles.rating}>
            <img
              src="star.png"
              alt="star-icon"
              className={styles.starIcon}
            ></img>
            <span className={styles.ratingValue}>{props.q.rating}</span>
          </div>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>{props.q.description}</div>
      </div>
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </Link>
  );
};

export default QuestionCard;
