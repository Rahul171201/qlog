import styles from "./Logo.module.css";
import { Itim } from "@next/font/google";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className={`${styles.logoWrapper} ${itim.className}`}>
      <span className={styles.firstHalf}>Q</span>
      <p className={styles.secondHalf}>Log</p>
    </div>
  );
};

export default Logo;
