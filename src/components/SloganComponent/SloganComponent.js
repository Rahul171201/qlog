import styles from "./SloganComponent.module.css";
import itim from "@/data/itimFont";

const SloganComponent = () => {
  return (
    <div className={`${styles.descriptionBox} ${itim.className}`}>
      <div className={styles.questionMark}>?</div>
      <div className={styles.description}>
        <em>
          Finding answers to your questions? Check us out, we can solve your
          problems!
        </em>
      </div>
    </div>
  );
};

export default SloganComponent;
