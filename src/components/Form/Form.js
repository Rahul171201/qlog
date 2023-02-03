import styles from "./Form.module.css";
import Input from "./Input/Input";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Form = (props) => {
  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form className={styles.form}>
        {props.data.map((item, idx) => {
          return (
            <Input
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              key={idx}
            ></Input>
          );
        })}
        <div className={styles.forgotPasswordWrapper}>
          <a href="#" className={styles.forgotPasswordLink}>
            Forgot Password?
          </a>
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </div>
        <div className={styles.alternateLinkWrapper}>
          <a href="#" className={styles.alternateLink}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
