import React from "react";
import LogoImg from "../assets/logo.png";
import SearchBar from "./SearchBar.js";
import Button from "./Button.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={LogoImg} alt="logo" className="logo" />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <SearchBar search="Search a album of your choice" />
      </div>

      {/* Feedback Button */}
      <div className="navbar-feedback">
        <Button className="navbar-button">Give Feedback</Button>
      </div>
    </nav>
  );
};

export default Navbar;
