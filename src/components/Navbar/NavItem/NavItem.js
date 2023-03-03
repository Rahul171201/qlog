import styles from "./NavItem.module.css";
import Link from "next/link";

const NavItem = (props) => {
  return (
    <li>
      <Link
        href={props.url}
        className={
          props.classType === "navListItem"
            ? styles.navListItem
            : styles.hamburgerItem
        }
      >
        {props.name}
      </Link>
    </li>
  );
};

export default NavItem;
