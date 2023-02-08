import styles from "./Form.module.css";
import Input from "./Input/Input";
import { Lato } from "@next/font/google";
import { UserContext } from "@/contexts/UserContext";
import User from "@/classes/User";
import users from "../../data/users";
import { useContext, useEffect, useState } from "react";
import Router from "next/router";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Form = (props) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("post", flag);
    if (flag) {
      Router.push("/");
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
        <div className={styles.alternateLinkWrapper}>
          <a href="#" className={styles.alternateLink}>
            {props.alternateButton}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
