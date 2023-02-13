import styles from "./Sidebar.module.css";
import { Lato } from "@next/font/google";
import { useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Sidebar = () => {
  let context = useContext(SearchContext);
  let { searchText, setSearchText } = context;

  const handleClick = (e) => {
    const text = e.target.innerHTML.toLowerCase();
    setSearchText(text);
  };

  return (
    <div className={`${styles.sideBarWrapper} ${lato.className}`}>
      <div className={styles.sideBar}>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={handleClick}>
            Music
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Sports
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Politics
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Movies
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Entertainment
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Dance
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Technology
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Finance
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            Health
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
