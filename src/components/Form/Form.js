import styles from "./Form.module.css";
import Input from "./Input/Input";
import lato from "@/data/latoFont";
import { UserContext } from "@/contexts/UserContext";
import handleLogin from "@/helper/handleLogin";
import { useCallback, useContext, useEffect, useReducer } from "react";
import Router from "next/router";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import handleRegister from "@/helper/handleRegister";
import Image from "next/image";

const Form = (props) => {
  let [users, setUsers] = useLocalStorage("users", new Map());
  const { setUser } = useContext(UserContext);

  // form reducer
  const formReducer = (state, action) => {
    switch (action.type) {
      case "start-login": {
        console.log("mein pata nahi start kyun nahi ho rha");
        return {
          ...state,
          status: "login-pending",
        };
      }
      case "login": {
        const finalUser = action.action(action.event, users);
        return {
          ...state,
          user: finalUser,
          status: finalUser ? "successful-login" : "login-failed",
        };
      }
      case "start-registration": {
        return {
          ...state,
          status: "registration-pending",
        };
      }
      case "register": {
        const finalUsers = action.action(action.event, users);
        return {
          ...state,
          user: null,
          users: finalUsers,
          status: finalUsers
            ? "successful-registration"
            : "registration-failed",
        };
      }
    }
  };

  const [formState, dispatchForm] = useReducer(formReducer, {
    user: null,
    users: null,
    status: "idle",
  });

  useEffect(() => {
    // form status check
    if (formState.status === "idle") {
      console.log("idle state : form is idle");
    } else if (
      formState.status === "login-pending" ||
      formState.status === "registration-pending"
    ) {
      console.log("pending state : authentication is pending");
    } else if (formState.status === "successful-login") {
      setUser(formState.user);
      Router.push("/feed");
    } else if (formState.status === "login-failed") {
      alert("Wrong username or password");
    } else if (formState.status === "successful-registration") {
      if (formState.users)
        setUsers(() => new Map(Array.from(formState.users.entries())));
      Router.push("/login");
    } else if (formState.status === "registration-failed") {
      alert("Confirm password must match password field");
    } else {
      if (formState.status)
        throw new Error(
          `Unrecognized status in form-state : ${formState.status}`
        );
      else throw new Error(`'status' not defined in form-state`);
    }
  }, [formState.status, formState.user, formState.users, setUser, setUsers]);

  console.log(formState);

  // submit handler
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (props.type === "login") {
        dispatchForm({ type: "start-login" });
        setTimeout(() => {
          dispatchForm({ type: "login", action: handleLogin, event: e });
        }, 3000);
      } else if (props.type === "register") {
        console.log("mein pata nahi kyun chal rha hun");
        dispatchForm({ type: "start-registration" });
        dispatchForm({ type: "register", action: handleRegister, event: e });
      } else {
        throw new Error(
          `Invalid form type: Unrecognized form type ${props.type}`
        );
      }
    },
    [props.type]
  );

  return (
    <div className={`${styles.formWrapper} ${lato.className}`}>
      <div className={styles.header}>{props.name}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {props.data.map((item, idx) => {
          return (
            <Input
              name={item.name}
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

      {formState.status === "login-pending" ||
      formState.status === "registration-pending" ? (
        <div className={styles.loadingModal}>
          <Image
            src="/images/loading1.png"
            alt="loading-icon"
            width={200}
            height={200}
            className={styles.loadingIcon}
          ></Image>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
