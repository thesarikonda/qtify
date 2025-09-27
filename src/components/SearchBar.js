import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      component="nav"
      className="navbar"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      height="75px"
      bgcolor="#1DB954"
    >
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
    </Box>
  );
};

export default Navbar;
