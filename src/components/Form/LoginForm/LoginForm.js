import styles from "./Form.module.css";
import Input from "../Input/Input";
import lato from "@/data/latoFont";
import { UserContext } from "@/contexts/UserContext";
import handleLogin from "@/helper/handleLogin";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import User from "@/classes/User";

// Login Form Component
const LoginForm = (props) => {
  // user context
  const { user, setUser } = useContext(UserContext);

  let [users, setUsers] = useLocalStorage("users", new Map());

  // if (users) console.log("login", users.get(1).rate);

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          const finalUser = handleLogin(e, users);
          if (finalUser) {
            const params = Object.values(finalUser);
            setUser(new User(...params));
            Router.push("/feed");
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
        <Link href={"/register"} className={styles.alternateLinkWrapper}>
          <span className={styles.alternateLink}>{props.alternateButton}</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
