import styles from "./Form.module.css";
import Input from "../Input/Input";
import lato from "@/data/latoFont";
import User from "@/classes/User";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { RegisteredUsersContext } from "@/contexts/RegisteredUsersContext";
import handleRegister from "@/helper/handleRegister";

// Register Form Component
const RegisterForm = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      Router.push("/login");
    }
  }, [flag]);

  // registered users context
  let context = useContext(RegisteredUsersContext);
  let { registeredUsers, setRegisteredUsers } = context;

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          const finalRegisteredUsers = handleRegister(e, registeredUsers);
          if (finalRegisteredUsers) {
            setRegisteredUsers(finalRegisteredUsers);
            setFlag(true);
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
