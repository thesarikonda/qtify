import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import SearchBar from "./SearchBar"; // your search component

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="logo" className="navbar-logo" />

      {/* Search Bar */}
      <SearchBar placeholder="search a song" />

      {/* Feedback Button */}
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
