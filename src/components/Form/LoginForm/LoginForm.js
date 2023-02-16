import styles from "./Form.module.css";
import Input from "../Input/Input";
import { Lato } from "@next/font/google";
import { UserContext } from "@/contexts/UserContext";
import users from "../../../data/users";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

// Login Form Component
const LoginForm = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      Router.push("/feed");
    }
  }, [flag]);

  let context = useContext(UserContext);
  let { user, setUser } = context;

  const handleSubmit = (e) => {
    // flag to know if the user is found in this function
    let currentFlag = false;
    e.preventDefault();

    const userId = +e.target[0].value;
    const password = e.target[1].value;

    users.forEach((u) => {
      console.log(u);
      if (u.userId === userId && u.password === password) {
        setUser(u);
        setFlag(true);
        currentFlag = true;
      }
    });

    if (!currentFlag) {
      alert("Wrong username or password");
    }
  };

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
