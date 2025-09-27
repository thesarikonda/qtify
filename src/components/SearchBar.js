// Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      
      <SearchBar
        placeholder="search a song"
        className="navbar-search"
      />
      
      <Button className="navbar-btn">Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
