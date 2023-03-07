import { useEffect } from "react";
import Router from "next/router";

const useFormStatus = (formState, setUser, setUsers) => {
  useEffect(() => {
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
};

export default useFormStatus;
