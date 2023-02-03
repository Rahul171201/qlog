import styles from "../styles/Feed.module.css";
import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";

const Feed = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <Logo></Logo>
        <Search></Search>
      </div>
      <div className={styles.feedWrapper}>
        <div className={styles.feedBox}></div>
        <div className={styles.detailBox}></div>
      </div>
    </main>
  );
};

export default Feed;
