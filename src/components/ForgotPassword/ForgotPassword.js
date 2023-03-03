import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.forgotPasswordWrapper}>
      <a href="#" className={styles.forgotPasswordLink}>
        Forgot Password?
      </a>
    </div>
  );
};

export default ForgotPassword;
