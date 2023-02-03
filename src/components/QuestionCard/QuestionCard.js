import styles from "./QuestionCard.module.css";

const QuestionCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}></div>
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </div>
  );
};

export default QuestionCard;
