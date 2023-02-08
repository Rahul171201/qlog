import styles from "./Form.module.css";
import Input from "../Input/Input";
import { Lato } from "@next/font/google";
import { UserContext } from "@/contexts/UserContext";
import User from "@/classes/User";
import users from "../../../data/users";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const RegisterForm = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("post", flag);
    if (flag) {
      Router.push("/login");
    }
  }, [flag]);

  let context = useContext(UserContext);
  let { user, setUser } = context;

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const userName = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    let total_users = users.length;

    if (password === confirmPassword) {
      setUser(
        new User(
          (total_users + 1) * (total_users + 1),
          userName,
          email,
          password
        )
      );
      setFlag(true);
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

export default RegisterForm;
