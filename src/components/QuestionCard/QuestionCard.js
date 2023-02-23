import styles from "./QuestionCard.module.css";
import lato from "@/data/latoFont";
import Link from "next/link";
import Image from "next/image";
import ContinueReading from "../ContinueReading/ContinueReading";
import showContent from "@/helper/showContent";
import QuestionDescription from "../Description/Description";

// Question card component
const QuestionCard = (props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <div className={styles.questionHeading}>
          <Link href={"/q/" + props.q.id} className={styles.questionTitle}>
            {props.q.title}
          </Link>
          <div className={styles.rating}>
            <Image
              src="/images/star.png"
              alt="star-icon"
              width={30}
              height={30}
            ></Image>
            <span className={styles.ratingValue}>{props.q.rating}</span>
          </div>
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div
          id={`description` + props.id}
          className={styles.questionDescription}
        >
          <QuestionDescription desc={props.q.description}></QuestionDescription>
        </div>
        <div
          onClick={(e) => {
            showContent(e, props.q.id, props.id);
          }}
          id={"continueBox" + props.q.id}
        >
          <ContinueReading></ContinueReading>
        </div>
      </div>
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </div>
  );
};

export default QuestionCard;
