import Logo from "@/components/Logo/Logo";
import Search from "@/components/Search/Search";
import styles from "./Navbar.module.css";
import { Lato } from "@next/font/google";
import Image from "next/image";
import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/contexts/UserContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  let context = useContext(UserContext);
  let { user, setUser } = context;

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
              <li>
                <Link href={"/feed"} className={styles.navListItem}>
                  FEED
                </Link>
              </li>
              <li>
                <Link
                  href={user ? "/profile/" + user.userId : "/feed"}
                  className={styles.navListItem}
                >
                  PROFILE
                </Link>
              </li>
              <li>
                <Link href={"/login"} className={styles.navListItem}>
                  LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.hamburgerWrapper} ${lato.className}`}>
          <Image
            src="/images/hamburger.png"
            alt="hamburger-icon"
            width={50}
            height={50}
            className={styles.hamburgerIcon}
            onClick={handleHamburger}
          ></Image>
          {hamburger ? (
            <div className={styles.hamburgerMenu}>
              <ul className={styles.menuList}>
                <li>
                  <Link href={"/feed"} className={styles.hamburgerItem}>
                    FEED
                  </Link>
                </li>
                <li>
                  <Link
                    href={user ? "/profile/" + user.userId : "/feed"}
                    className={styles.hamburgerItem}
                  >
                    PROFILE
                  </Link>
                </li>
                <li>
                  <Link href={"/login"} className={styles.hamburgerItem}>
                    LOGOUT
                  </Link>
                </li>
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
