import styles from "../Form.module.css";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Input = (props) => {
  return (
    <div className={`${styles.inputWrapper} ${lato.className}`}>
      <label className={styles.label}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={styles.inputField}
      ></input>
    </div>
  );
};

export default Input;
