import styles from "./Search.module.css";
import Image from "next/image";
import { useState, useContext } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import Router from "next/router";

const Search = () => {
  const [text, setText] = useState("");

  // searchText
  const { searchText, setSearchText } = useContext(SearchContext);

  const handleSearch = () => {
    if (text === "") setSearchText(undefined);
    else setSearchText(text);
    Router.push("/feed");
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
