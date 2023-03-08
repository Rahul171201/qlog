import styles from "./Logo.module.css";
import itim from "@/data/itimFont";
import Link from "next/link";
import { memo } from "react";

// Logo Component
const Logo = () => {
  return (
    <Link href={"/feed"} className={`${styles.logoWrapper} ${itim.className}`}>
      <span className={styles.firstHalf}>Q</span>
      <p className={styles.secondHalf}>Log</p>
    </Link>
  );
};

export default memo(Logo);
