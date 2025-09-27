import React from "react";
import "./Navbar.css";               // use plain CSS (global classes)
import LogoSrc from "../assets/logo.png";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">               {/* class name the Cypress tests expect */}
      <div className="navbar-left">
        <img src={LogoSrc} alt="Qtify logo" className="logo" />
      </div>

      <div className="navbar-center">
        <SearchBar search={"Search a song of your choice"} />
      </div>

      <div className="navbar-right">
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
};

export default Navbar;