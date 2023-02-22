import styles from "./Form.module.css";
import Input from "../Input/Input";
import lato from "@/data/latoFont";
import { UserContext } from "@/contexts/UserContext";
import handleLogin from "@/helper/HandleLogin";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

// Login Form Component
const LoginForm = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      Router.push("/feed");
    }
  }, [flag]);

  // user context
  let context = useContext(UserContext);
  let { user, setUser } = context;

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          const finalUser = handleLogin(e);
          setUser(finalUser);
          if (finalUser) setFlag(true);
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
        <Link href={"/register"} className={styles.alternateLinkWrapper}>
          <span className={styles.alternateLink}>{props.alternateButton}</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
