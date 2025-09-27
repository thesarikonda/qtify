import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg"; // adjust path if needed
import "./SearchBar.css";

const SearchBar = ({ search }) => {
  return (
    <form className="wrapper" onSubmit={(e) => e.preventDefault()}>
      <input className="search" placeholder={search} aria-label="search-input" />
      <button className="searchButton" type="submit" aria-label="search-button">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;