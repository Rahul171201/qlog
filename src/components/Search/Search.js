import styles from "./Search.module.css";
import Image from "next/image";

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Search for questions"
          className={styles.searchField}
        ></input>
        <Image
          src="/magnifier.png"
          alt="search-icon"
          width={30}
          height={30}
          className={styles.searchIcon}
        ></Image>
      </div>
    </div>
  );
};

export default Search;
