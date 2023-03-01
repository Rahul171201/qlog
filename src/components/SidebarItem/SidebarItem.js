import styles from "./SidebarItem.module.css";

const SidebarItem = (props) => {
  return (
    <li className={`${props.className} ${styles.listItem}`}>{props.value}</li>
  );
};

export default SidebarItem;
