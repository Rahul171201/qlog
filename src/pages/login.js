import styles from "../styles/Login.module.css";
import Logo from "@/components/Logo/Logo";
import itim from "@/data/itimFont";
import LoginForm from "@/components/Form/LoginForm/LoginForm";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import loginFormData from "@/data/loginFormData";
import { SearchContext } from "@/contexts/SearchContext";

// Login Component
const Login = () => {
  // user context
  const { user, setUser } = useContext(UserContext);
  const { searchText, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    setUser(undefined);
    setSearchText(undefined);
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
          data={loginFormData}
          mainButton="Login"
          alternateButton="Sign Up"
        ></LoginForm>
      </div>
    </main>
  );
};

export default Login;
