import styles from "./Sidebar.module.css";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Sidebar = () => {
  return (
    <div className={`${styles.sideBarWrapper} ${lato.className}`}>
      <div className={styles.sideBar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Music</li>
          <li className={styles.listItem}>Sports</li>
          <li className={styles.listItem}>Politics</li>
          <li className={styles.listItem}>Movies</li>
          <li className={styles.listItem}>Entertainment</li>
          <li className={styles.listItem}>Dance</li>
          <li className={styles.listItem}>Technology</li>
          <li className={styles.listItem}>Finance</li>
          <li className={styles.listItem}>Health</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
