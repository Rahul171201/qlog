import styles from "../styles/Answer.module.css";
import Navbar from "@/components/Navbar/Navbar";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Answer = () => {
  return (
    <div className={`${styles.answerWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.questionWrapper}>
        <div className={styles.questionTitle}>
          Why are men getting lazy day by day?
        </div>
        <hr className={styles.horizontalRule}></hr>
        <div className={styles.questionDescription}>
          Lorem ipsum hai hum aur kahan hai zinfahi mein koi gum taara raara um
          um um ro rol rola rol. Lorem ipsum hai hum aur kahan hai zinfahi mein
          koi gum taara raara um um um ro rol rola rol
        </div>
        <div className={styles.infoBar}>
          <span>Sainath Reddy</span>
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={styles.topBar}>Type your answer below</div>
        <div className={styles.textArea}>
          <textArea className={styles.text}></textArea>
        </div>
        <div className={styles.bottomBar}>
          <button className={styles.clearallButton}>CLEAR</button>
          <button className={styles.postButton}>POST</button>
        </div>
      </div>
    </div>
  );
};

export default Answer;
