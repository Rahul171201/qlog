import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import { Itim } from "@next/font/google";
import RegisterForm from "@/components/Form/RegisterForm/RegisterForm";

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
});

// input field data for register form
const inputFieldData = [
  {
    type: "email",
    placeholder: "Type your email address",
    label: "Email",
    image: "/images/email.png",
  },
  {
    type: "text",
    placeholder: "Type your user name",
    label: "Username",
    image: "/images/id-card.png",
  },
  {
    type: "password",
    placeholder: "Type your password",
    label: "Password",
    image: "/images/padlock.png",
  },
  {
    type: "password",
    placeholder: "Confirm your password",
    label: "Confirm Password",
    image: "/images/padlock.png",
  },
];

// Register Component
const Register = () => {
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
        <RegisterForm
          name="Register"
          data={inputFieldData}
          mainButton="Sign Up"
          alternateButton="Login"
        ></RegisterForm>
      </div>
    </main>
  );
};

export default Register;
