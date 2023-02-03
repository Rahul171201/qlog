import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import QuestionCard from "@/components/QuestionCard/QuestionCard";

const Feed = () => {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.feedWrapper}>
        <div className={styles.feedBox}>
          <QuestionCard></QuestionCard>
          <QuestionCard></QuestionCard>
          <QuestionCard></QuestionCard>
        </div>
        <div className={styles.detailBox}></div>
      </div>
    </main>
  );
};

export default Feed;
