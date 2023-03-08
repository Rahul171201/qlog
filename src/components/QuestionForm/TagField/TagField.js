import { useState } from "react";
import styles from "./TagField.module.css";

const TagField = () => {
  // state to display tag field or not
  const [displayTag, setDisplayTag] = useState(true);

  return displayTag ? (
    <div className={styles.fieldWrapper}>
      <input className={styles.inputField} type="text" required={true}></input>
      <button
        className={styles.removeButton}
        onClick={() => setDisplayTag(false)}
      >
        -
      </button>
    </div>
  ) : (
    <></>
  );
};

export default TagField;
