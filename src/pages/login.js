import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import { Itim } from "@next/font/google";
import LoginForm from "@/components/Form/LoginForm/LoginForm";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

// input field data for login form
const inputFieldData = [
  {
    type: "text",
    placeholder: "Type your user id",
    label: "User Id",
    image: "/images/user.png",
  },
  {
    type: "password",
    placeholder: "Type your password",
    label: "Password",
    image: "/images/padlock.png",
  },
];

// Login Component
const Login = () => {
  // user context
  let context = useContext(UserContext);
  let { setUser } = context;

  useEffect(() => {
    setUser(undefined);
  }, []);

  return (
    <main className={styles.loginMain}>
      <div className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <Logo></Logo>
        </div>
      </div>
      <div className={styles.loginWrapper}>
        <div className={`${styles.descriptionBox} ${itim.className}`}>
          <div className={styles.questionMark}>?</div>
          <div className={styles.description}>
            <em>
              Finding answers to your questions? Check us out, we can solve your
              problems!
            </em>
          </div>
        </div>
        <LoginForm
          name="Login"
          data={inputFieldData}
          mainButton="Login"
          alternateButton="Sign Up"
        ></LoginForm>
      </div>
    </main>
  );
};

export default Login;
