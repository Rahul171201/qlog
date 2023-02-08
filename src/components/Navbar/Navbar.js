import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import styles from "./Navbar.module.css";
import { Lato } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className={styles.navbarWrapper}>
      {hamburger ? (
        <div className={styles.overlay} onClick={handleHamburger}></div>
      ) : (
        <></>
      )}
      <div className={styles.navbar}>
        <Logo></Logo>
        <div className={`${styles.navListWrapper} ${lato.className}`}>
          <div className={styles.navList}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>FEED</li>
              <li className={styles.navListItem}>PROFILE</li>
              <li className={styles.navListItem}>LOGOUT</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.hamburgerWrapper} ${lato.className}`}>
          <Image
            src="/hamburger.png"
            alt="hamburger-icon"
            width={50}
            height={50}
            className={styles.hamburgerIcon}
            onClick={handleHamburger}
          ></Image>
          {hamburger ? (
            <div className={styles.hamburgerMenu}>
              <ul className={styles.menuList}>
                <li className={styles.hamburgerItem}>FEED</li>
                <li className={styles.hamburgerItem}>PROFILE</li>
                <li className={styles.hamburgerItem}>LOGOUT</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Search></Search>
      </div>
    </div>
  );
};

export default Navbar;
