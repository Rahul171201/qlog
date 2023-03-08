import styles from "./BlankCard.module.css";

const BlankCard = (props) => {
  return (
    <div className={styles.blankCardWrapper}>
      <div className={styles.title}>{props.title}</div>
      <hr className={styles.horizontalRule}></hr>
      <div className={styles.content}>{props.content}</div>
    </div>
  );
};

export default BlankCard;
