import styles from "./EditProfile.module.css";
import Navbar from "@/components/Navbar/Navbar";
import lato from "@/data/latoFont";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";

const EditProfile = () => {
  // user context
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const new_user = user;
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
