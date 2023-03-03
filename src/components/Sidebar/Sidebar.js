import styles from "./Sidebar.module.css";
import lato from "@/data/latoFont";
import { useContext, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import SidebarItem from "../SidebarItem/SidebarItem";

// sidebar component
const Sidebar = () => {
  // search context
  let { setSearchText } = useContext(SearchContext);

  // current selected side bar item
  const [currentItem, setCurrentItem] = useState(null);

  /**
   * Handles tag selection on the sidebar items
   * @param {Event} e
   * @returns
   */
  const handleClick = (e) => {
    const index = +e.target.parentNode.getAttribute("index");
    const value = e.target.innerHTML;
    if (index) {
      const selectedElement = index;
      if (currentItem === selectedElement) {
        setCurrentItem(null);
        setSearchText(undefined);
        return;
      } else {
        setCurrentItem(selectedElement);
      }

      if (value) {
        const text = value.toLowerCase();
        setSearchText(text);
      }
    }
  };

  return (
    <div className={`${styles.sideBarWrapper} ${lato.className}`}>
      <div className={styles.sideBar}>
        <ul className={styles.list}>
          <div onClick={handleClick} index={1}>
            <SidebarItem
              className={currentItem === 1 ? "selected" : "notSelected"}
              value="Sports"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={2}>
            <SidebarItem
              className={currentItem === 2 ? "selected" : "notSelected"}
              value="Politics"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={3}>
            <SidebarItem
              className={currentItem === 3 ? "selected" : "notSelected"}
              value="Dance"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={4}>
            <SidebarItem
              className={currentItem === 4 ? "selected" : "notSelected"}
              value="Movies"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={5}>
            <SidebarItem
              className={currentItem === 5 ? "selected" : "notSelected"}
              value="Entertainment"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={6}>
            <SidebarItem
              className={currentItem === 6 ? "selected" : "notSelected"}
              value="Finance"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={7}>
            <SidebarItem
              className={currentItem === 7 ? "selected" : "notSelected"}
              value="Health"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={8}>
            <SidebarItem
              className={currentItem === 8 ? "selected" : "notSelected"}
              value="Technology"
            ></SidebarItem>
          </div>
          <div onClick={handleClick} index={9}>
            <SidebarItem
              className={currentItem === 9 ? "selected" : "notSelected"}
              value="Music"
            ></SidebarItem>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
