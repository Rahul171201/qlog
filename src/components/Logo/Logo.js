import styles from "./Logo.module.css";
import { Itim } from "@next/font/google";
import Link from "next/link";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link href={"/feed"} className={`${styles.logoWrapper} ${itim.className}`}>
      <span className={styles.firstHalf}>Q</span>
      <p className={styles.secondHalf}>Log</p>
    </Link>
  );
};

export default Logo;
