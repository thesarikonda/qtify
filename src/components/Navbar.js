import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </a>
      {/* Logo */}
      

      {/* Search Bar */}
      <div>
              <input
        type="text"
        placeholder="search"  
        className="navbar-search"
      />
      </div>


      {/* Feedback Button */}
      <Button>Give Feedback</Button>  
    </nav>
  );
};

export default Navbar;
