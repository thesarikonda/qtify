import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./SearchBar.css"; // using your CSS

const SearchBar = ({ search }) => {
  return (
    <form className="wrapper">
      <input className="search" placeholder={search} />
      <button className="searchButton" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
