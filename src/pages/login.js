import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import { Itim } from "@next/font/google";
import LoginForm from "@/components/Form/LoginForm/LoginForm";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

const inputFieldData = [
  {
    type: "text",
    placeholder: "Type your user id",
    label: "User Id",
    image: "/user.png",
  },
  {
    type: "password",
    placeholder: "Type your password",
    label: "Password",
    image: "/padlock.png",
  },
];

const Login = () => {
  return (
    <main className={styles.loginMain}>
      <div className={styles.navbar}>
        <Logo></Logo>
      </div>
      <div className={styles.loginWrapper}>
        <div className={`${styles.descriptionBox} ${itim.className}`}>
          <div className={styles.questionMark}>?</div>
          <div className={styles.description}>
            <em>
              Finding answers to your questions? Chech us out, we can solve your
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
