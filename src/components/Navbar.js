import React from "react";
import LogoImg from "../assets/logo.png";
import SearchBar from "./SearchBar.js";
import Button from "./Button.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={LogoImg} alt="logo" className="logo" />

      {/* Search Bar */}
      <SearchBar search="search" />

      {/* Feedback Button */}
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
