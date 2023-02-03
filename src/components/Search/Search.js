import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        placeholder="Search for questions"
        className={styles.searchField}
      ></input>
    </div>
  );
};

export default Search;
