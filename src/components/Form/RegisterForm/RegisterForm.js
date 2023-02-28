import styles from "./Form.module.css";
import Input from "../Input/Input";
import lato from "@/data/latoFont";
import Router from "next/router";
import Link from "next/link";
import handleRegister from "@/helper/handleRegister";
import useLocalStorage from "@/hooks/useLocalStorage";

// Register Form Component
const RegisterForm = (props) => {
  const [users, setUsers] = useLocalStorage("users", new Map());

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          const value = handleRegister(e, users);
          if (value) {
            setUsers(new Map(Array.from(value.entries())));
            Router.push("/login");
          }
        }}
      >
        {props.data.map((item, idx) => {
          return (
            <Input
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              key={idx}
              image={item.image}
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
            {props.mainButton}
          </button>
        </div>
        <Link href={"/login"} className={styles.alternateLinkWrapper}>
          <span className={styles.alternateLink}>{props.alternateButton}</span>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
