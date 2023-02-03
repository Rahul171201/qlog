import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Sidebar from "@/components/Sidebar/Sidebar";

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
        <Sidebar></Sidebar>
      </div>
    </main>
  );
};

export default Feed;
