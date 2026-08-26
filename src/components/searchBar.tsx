import styles from "./searchBar.module.css";
import type SearchBarProps from "../types/searchBarProps";



const searchBar = ({ value, setSearchValue}: SearchBarProps) => {
  const handleSearch = () => {
    console.log(value);
  }
  
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Todoを検索"
        className={styles.searchInput}
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button className={styles.searchButton} onClick={handleSearch}>検索</button>
    </div>
  );
};

export default searchBar;
