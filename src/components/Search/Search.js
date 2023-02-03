import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        placeholder="Search for questions"
        className={styles.searchField}
      ></input>
      <img
        src="magnifier.png"
        alt="search-icon"
        className={styles.searchIcon}
      ></img>
    </div>
  );
};

export default Search;
