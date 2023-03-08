import Logo from "@/components/Logo/Logo";
import Search from "@/components/Navbar/Search/Search";
import styles from "./Navbar.module.css";
import lato from "@/data/latoFont";
import Image from "next/image";
import { memo, useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  // hamburger handler
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  // user context
  const { user } = useContext(UserContext);

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
              <NavItem
                name="FEED"
                url="/feed"
                classType="navListItem"
              ></NavItem>
              <NavItem
                name="PROFILE"
                url={user ? "/profile/" + user.userId : "/feed"}
                classType="navListItem"
              ></NavItem>
              <NavItem
                name="LOGOUT"
                url="/login"
                classType="navListItem"
              ></NavItem>
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
                <NavItem
                  name="FEED"
                  url="/feed"
                  classType="hamburgerItem"
                ></NavItem>
                <NavItem
                  name="PROFILE"
                  url={user ? "/profile/" + user.userId : "/feed"}
                  classType="hamburgerItem"
                ></NavItem>
                <NavItem
                  name="LOGOUT"
                  url="/login"
                  classType="hamburgerItem"
                ></NavItem>
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

export default memo(Navbar);
