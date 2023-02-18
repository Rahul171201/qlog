import styles from "./StatsCard.module.css";
import Link from "next/link";
import { Lato } from "@next/font/google";
import { useEffect } from "react";
import handleDescriptionDisplay from "@/helper/HandleDescriptionDisplay";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const StatsCard = ({ id, title, description }) => {
  useEffect(() => {
    handleContentDisplay();
  });
  const handleContentDisplay = () => {
    const node = document.getElementById("content-area" + id);

    node.innerHTML = description;
  };

  return (
    <Link
      href={"/q/" + id}
      className={`${styles.cardWrapper} ${lato.className}`}
    >
      <div className={styles.cardTitle}>{title}</div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.cardContent} id={"content-area" + id}></div>
    </Link>
  );
};

export default StatsCard;
