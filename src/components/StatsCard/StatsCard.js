import styles from "./StatsCard.module.css";
import Link from "next/link";
import { Lato } from "@next/font/google";
import { useEffect } from "react";
import Description from "../Description/Description";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const StatsCard = ({ id, title, description }) => {
  return (
    <Link
      href={"/q/" + id}
      className={`${styles.cardWrapper} ${lato.className}`}
    >
      <div className={styles.cardTitle}>{title}</div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.cardContent} id={"content-area" + id}>
        <Description desc={description}></Description>
      </div>
    </Link>
  );
};

export default StatsCard;
