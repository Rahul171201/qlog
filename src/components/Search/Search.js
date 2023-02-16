import styles from "./Search.module.css";
import Image from "next/image";
import { useState, useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";

const Search = () => {
  const [text, setText] = useState("");

  let context = useContext(SearchContext);
  let { searchText, setSearchText } = context;

  const handleSearch = () => {
    if (text === "") setSearchText(undefined);
    else setSearchText(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Search for questions"
          className={styles.searchField}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></input>
        <Image
          src="/images/magnifier.png"
          alt="search-icon"
          width={30}
          height={30}
          className={styles.searchIcon}
          onClick={handleSearch}
        ></Image>
      </div>
    </div>
  );
};

export default Search;
