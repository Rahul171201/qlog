import styles from "./QuestionCard.module.css";
import { Lato } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContinueReading from "../ContinueReading/ContinueReading";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const QuestionCard = (props) => {
  useEffect(() => {
    handleDescriptionDisplay(props.q.description);
  }, []);

  const handleDescriptionDisplay = (desc) => {
    const element = document.createElement("div");
    element.innerHTML = desc;
    const description = document.getElementById("description" + props.id);
    description.innerHTML = "";
    description.append(element);
  };

  const showContent = (e) => {
    const continueBox = document.getElementById("continueBox" + props.q.id);
    continueBox.style.display = "none";
    const contentBox = document.getElementById("description" + props.id);
    contentBox.style.height = "min-content";
    contentBox.style.opacity = "1";
  };

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
        ></div>
        <div onClick={showContent} id={"continueBox" + props.q.id}>
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
