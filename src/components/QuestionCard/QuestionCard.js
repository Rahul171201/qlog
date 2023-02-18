import styles from "./QuestionCard.module.css";
import { Lato } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import handleDescriptionDisplay from "@/helper/HandleDescriptionDisplay";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const QuestionCard = (props) => {
  useEffect(() => {}, []);

  return (
    <Link href={"/q/" + props.q.id} className={styles.cardWrapper}>
      <div className={`${styles.card} ${lato.className}`}>
        <div className={styles.questionTitle}>
          <span>{props.q.title}</span>
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
      </div>
      <div className={`${styles.circle} ${styles.bigCircle}`}></div>
      <div className={`${styles.circle} ${styles.mediumCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle}`}></div>
    </Link>
  );
};

export default QuestionCard;
