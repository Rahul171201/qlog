import styles from "./QuestionCard.module.css";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const QuestionCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <div className={styles.question}>
          <span>Why are most of the men becoming lazy day by day?</span>
          <div className={styles.rating}>
            <img
              src="star.png"
              alt="star-icon"
              className={styles.starIcon}
            ></img>
            <span className={styles.ratingValue}>243</span>
          </div>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.answer}>
          The reason might be because of so and so.....so and so...loem ipsum
          backchodi. The reason might be because of so and so.....so and
          so...loem ipsum backchodi The reason might be because of so and
          so.....so and so...loem ipsum backchodi
        </div>
      </div>
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </div>
  );
};

export default QuestionCard;
