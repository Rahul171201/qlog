import styles from "./Sidebar.module.css";
import { Lato } from "@next/font/google";
import { useContext, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Sidebar = () => {
  let { searchText, setSearchText } = useContext(SearchContext);

  const [currentItem, setCurrentItem] = useState(null);

  /**
   * FIXME:
   * IS THIS FUNCTION REQUIRED TO BE HERE?
   */
  const handleClick = (e) => {
    const element = e.target;
    if (currentItem === element) {
      element.style.backgroundColor = "rgb(138, 169, 236)";

      setCurrentItem(null);
      setSearchText(undefined);
      Router.push("/feed");
      return;
    } else {
      if (currentItem) {
        const previousItem = currentItem;
        previousItem.style.backgroundColor = "rgb(138, 169, 236)";
      }
      element.style.backgroundColor = "rgb(186, 155, 208)";
      setCurrentItem(element);
    }

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
