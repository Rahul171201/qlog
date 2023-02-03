import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo></Logo>
      <Search></Search>
    </div>
  );
};

export default Navbar;
