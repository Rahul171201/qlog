import styles from "./Form.module.css";
import Input from "./Input/Input";
import lato from "@/data/latoFont";
import { UserContext } from "@/contexts/UserContext";
import handleLogin from "@/helper/handleLogin";
import { useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import handleRegister from "@/helper/handleRegister";

const Form = (props) => {
  // submit handler
  const handleSubmit = (e) => {
    if (props.type === "login") {
      const finalUser = handleLogin(e, users);
      if (finalUser) {
        setUser(finalUser);
        Router.push("/feed");
      }
    } else if (props.type === "register") {
      const value = handleRegister(e, users);
      if (value) {
        setUsers(new Map(Array.from(value.entries())));
        Router.push("/login");
      }
    } else {
      throw new Error(
        `Invalid form type: Unrecognized form type ${props.type}`
      );
    }
  };

  const { setUser } = useContext(UserContext);

  let [users, setUsers] = useLocalStorage("users", new Map());

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
        {props.type === "login" ? <ForgotPassword></ForgotPassword> : <></>}
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.submitButton}>
            {props.mainButton}
          </button>
        </div>
        <Link
          href={props.type === "login" ? "/register" : "/login"}
          className={styles.alternateLinkWrapper}
        >
          <span className={styles.alternateLink}>{props.alternateButton}</span>
        </Link>
      </form>
    </div>
  );
};

export default Form;
