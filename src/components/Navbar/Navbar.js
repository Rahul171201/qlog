import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import styles from "./Navbar.module.css";
import { Lato } from "@next/font/google";
import Image from "next/image";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo></Logo>
      <div className={`${styles.navListWrapper} ${lato.className}`}>
        <div className={styles.navList}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>FEED</li>
            <li className={styles.navItem}>PROFILE</li>
            <li className={styles.navListItem}>LOGOUT</li>
          </ul>
        </div>
      </div>
      <div className={styles.hamburgerWrapper}>
        <Image
          src="/hamburger.png"
          alt="hamburger-icon"
          width={50}
          height={50}
          className={styles.hamburgerIcon}
        ></Image>
      </div>
      <Search></Search>
    </div>
  );
};

export default Navbar;
