import styles from "./QuestionCard.module.css";
import lato from "@/data/latoFont";
import ContinueReading from "../ContinueReading/ContinueReading";
import QuestionHeader from "./QuestionHeader/QuestionHeader";
import QuestionDescription from "./QuestionDescription/QuestionDescription";
import { useState } from "react";

// Question card component
const QuestionCard = (props) => {
  // state to determine if the question to be shown fully
  const [fullDisplay, setFullDisplay] = useState(false);

  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <QuestionHeader q={props.q}></QuestionHeader>
        <hr className={styles.horizontalRule}></hr>
        <QuestionDescription
          q={props.q}
          fullDisplay={fullDisplay}
        ></QuestionDescription>
        <div
          onClick={(e) => {
            setFullDisplay(true);
          }}
        >
          {fullDisplay ? <></> : <ContinueReading></ContinueReading>}
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
