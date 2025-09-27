import React from "react";
import LogoImg from "../assets/logo.png";
import SearchBar from "./SearchBar.js";
import Button from "./Button.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <img src={LogoImg} alt="logo" />
        <SearchBar search="search" />
        <Button className="navbar-button">Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
