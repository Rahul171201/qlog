import styles from "./StatsCard.module.css";
import Link from "next/link";
import lato from "@/data/latoFont";
import Description from "../Description/Description";

const StatsCard = ({ id, title, description }) => {
  return (
    <Link
      href={"/q/" + id}
      className={`${styles.cardWrapper} ${lato.className}`}
    >
      <div className={styles.cardTitle}>{title}</div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.cardContent}>
        <Description desc={description}></Description>
      </div>
    </Link>
  );
};

export default StatsCard;
