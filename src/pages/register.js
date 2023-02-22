import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import itim from "@/data/itimFont";
import RegisterForm from "@/components/Form/RegisterForm/RegisterForm";
import registerFormData from "@/data/registerFormData";

// Register Component
const Register = () => {
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
        <RegisterForm
          name="Register"
          data={registerFormData}
          mainButton="Sign Up"
          alternateButton="Login"
        ></RegisterForm>
      </div>
    </main>
  );
};

export default Register;
