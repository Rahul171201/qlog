import styles from "./EditProfile.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { Lato } from "@next/font/google";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const EditProfile = () => {
  const context = useContext(UserContext);
  let { user, setUser } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    let new_user = user;
    new_user.userName = name;
    new_user.email = email;
    setUser(new_user);
    Router.push("/profile/" + user.userId);
  };

  return (
    <div className={styles.editProfileWrapper}>
      <Navbar></Navbar>
      <div className={`${styles.formWrapper} ${lato.className}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Full name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className={styles.inputField}
            required
          ></input>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className={styles.inputField}
            required
          ></input>
          <button type="submit" className={styles.submitButton}>
            EDIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
