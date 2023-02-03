import styles from "../styles/Feed.module.css";
import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import QuestionCard from "@/components/QuestionCard/QuestionCard";

const Feed = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <Logo></Logo>
        <Search></Search>
      </div>
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
