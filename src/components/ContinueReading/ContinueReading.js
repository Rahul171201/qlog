import Image from "next/image";
import styles from "./ContinueReading.module.css";

const ContinueReading = () => {
  return (
    <div className={styles.wrapper}>
      <span>Continue reading</span>
      <Image
        src="/images/down-arrow.png"
        alt="down-arrow"
        width={20}
        height={20}
        className={styles.icon}
      ></Image>
    </div>
  );
};

export default ContinueReading;
