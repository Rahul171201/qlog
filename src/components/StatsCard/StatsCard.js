import styles from "./StatsCard.module.css";
import Link from "next/link";
import lato from "@/data/latoFont";
import ImageComponent from "../ImageComponent/ImageComponent";

const StatsCard = ({ id, title, description, attachments }) => {
  return (
    <Link
      href={"/q/" + id}
      className={`${styles.cardWrapper} ${lato.className}`}
    >
      <div className={styles.cardTitle}>{title}</div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.cardContent}>
        {description}
        {attachments.map((attachment, index) => {
          return <ImageComponent key={index} src={attachment}></ImageComponent>;
        })}
      </div>
    </Link>
  );
};

export default StatsCard;
