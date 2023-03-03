import styles from "./QuestionCard.module.css";
import lato from "@/data/latoFont";
import ContinueReading from "../ContinueReading/ContinueReading";
import showContent from "@/helper/showContent";
import QuestionHeader from "./QuestionHeader/QuestionHeader";
import QuestionDescription from "./QuestionDescription/QuestionDescription";

// Question card component
const QuestionCard = (props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <QuestionHeader q={props.q}></QuestionHeader>
        <hr className={styles.horizontalRule}></hr>
        <QuestionDescription q={props.q}></QuestionDescription>
        <div
          onClick={(e) => {
            showContent(e, props.q.id, props.id);
          }}
          id={"continueBox" + props.q.id}
        >
          <ContinueReading></ContinueReading>
        </div>
      </div>
      {/* Decorative circles */}
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </div>
  );
};

export default QuestionCard;
