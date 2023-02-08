import styles from "./StatsCard.module.css";
import Link from "next/link";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const StatsCard = () => {
  return (
    <Link href={"/feed"} className={`${styles.cardWrapper} ${lato.className}`}>
      <div className={styles.cardTitle}>
        Why are men getting lazy day by day ?
      </div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.cardContent}>
        Lorem ipusm bahut ajeeb hai backodi hai lorem ipsum hai bahoht bakchodi
        lorem ipsum lorem ipsum bakchodi. bAKCHODI AKSCNXNXCWSNXWNW
        ASXMSKDCXSCWCX ECDWCWERCWREVWRV nacxjdnscxjdncjwnjwkenc
      </div>
    </Link>
  );
};

export default StatsCard;
