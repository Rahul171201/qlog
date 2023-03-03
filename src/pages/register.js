import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import registerFormData from "@/data/registerFormData";
import Form from "@/components/Form/Form";
import SloganComponent from "@/components/SloganComponent/SloganComponent";

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
        <SloganComponent></SloganComponent>
        <Form
          name="Register"
          data={registerFormData}
          mainButton="Sign Up"
          alternateButton="Login"
          type="register"
        ></Form>
      </div>
    </main>
  );
};

export default Register;
