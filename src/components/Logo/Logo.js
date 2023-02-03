import styles from "./Logo.module.css";
import { Itim } from "@next/font/google";

const roboto = Itim({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className={`${styles.logoWrapper} ${roboto.className}`}>
      <span className={styles.firstHalf}>Q</span>
      <p className={styles.secondHalf}>Log</p>
    </div>
  );
};

export default Logo;
