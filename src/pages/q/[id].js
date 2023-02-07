import Navbar from "@/components/Navbar/Navbar";
import styles from "./Question.module.css";
import Image from "next/image";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Question = () => {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={`${styles.contentWrapper} ${lato.className}`}>
        <div className={styles.questionBox}>
          <div className={styles.questionWrapper}>
            <div className={styles.questionTitle}>
              Why are men getting lazy day by day?
            </div>
            <div className={styles.questionDescription}>
              According to recent studies, men have become lazy over the past
              decade. Laziness not only reduces productivity but also impacts
              health. I wanted to know the reasons behind this.
            </div>
            <div className={styles.tagBox}>
              <a href="#" className={styles.tag}>
                #health
              </a>
              <a href="#" className={styles.tag}>
                #home
              </a>
              <a href="#" className={styles.tag}>
                #philosophy
              </a>
            </div>
          </div>

          <div className={styles.questionSideBox}>
            <div className={styles.ratingWrapper}>
              <span className={styles.rating}>3</span>
              <Image
                src="/star.png"
                alt="rating-icon"
                width={50}
                height={50}
                className={styles.icon}
              ></Image>
            </div>
            <div className={styles.infoWrapper}>
              <span>Sainath Reddy</span>
              <span>2 days ago</span>
            </div>
          </div>
        </div>
        <div className={styles.answersBox}>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
          <AnswerCard></AnswerCard>
        </div>
      </div>
    </main>
  );
};

export default Question;
