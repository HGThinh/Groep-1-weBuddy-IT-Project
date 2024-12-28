import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        id="searchInput"
        className={styles.searchInput}
        placeholder="Search for keywords to find what you are looking for..."
      />
      <button id="searchButton" className={styles.searchButton}>
        Search
      </button>
    </section>
  );
};
export default SearchBar;