import styles from "./Input.module.css";
import { Lato } from "@next/font/google";
import Image from "next/image";

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
        required
      ></input>
      <Image
        src={props.image}
        alt="user-icon"
        width={20}
        height={20}
        className={styles.imageIcon}
      ></Image>
    </div>
  );
};

export default Input;
