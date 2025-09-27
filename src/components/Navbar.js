import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="logo" className="navbar-logo" />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="search a song"
        className="navbar-search"
      />

      {/* Feedback Button */}
      <button className="navbar-btn">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
