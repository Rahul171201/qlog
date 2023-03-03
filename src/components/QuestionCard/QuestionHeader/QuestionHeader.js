import styles from "./QuestionHeader.module.css";
import Link from "next/link";
import Image from "next/image";

const QuestionHeader = (props) => {
  return (
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
  );
};

export default QuestionHeader;
