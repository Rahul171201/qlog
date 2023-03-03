import styles from "./Input.module.css";
import Image from "next/image";
import lato from "@/data/latoFont";
import useInput from "@/hooks/useInput";

// Input Component
const Input = (props) => {
  const { value, handleChange } = useInput("");

  return (
    <div className={`${styles.inputWrapper} ${lato.className}`}>
      <label htmlFor={props.label} className={styles.label}>
        {props.label}
      </label>
      <input
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
        className={styles.inputField}
        onChange={handleChange}
        value={value}
        required
        autoComplete="off"
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
