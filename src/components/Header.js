
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Header.css"
import logo from "../assets/logo.png"
import theme from "../theme.js"
import feedback from "../assets/feedBack.png"
import SearchIcon from "@mui/icons-material/Search"
import heroImage from "../assets/hero.png"

const Header = () => {

    return (
        <>
            <div
            style={{
                backgroundColor: "#34C94B", 
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
            }}
            >
            <img src={logo} alt="qtify-logo" />

            <div style={{ position: "relative", width: "50%" }}>
                <input
                type="text"
                placeholder="Search a album of your choice"
                style={{
                    backgroundColor: "#ffffff",       
                    border: "2px solid #121212",     
                    borderRadius: "0.375rem",
                    padding: "0.5rem",
                    paddingRight: "4rem",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                }}
                />

                <div
                style={{
                    position: "absolute",
                    right: "3rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1px",
                    height: "1.5rem",
                    backgroundColor: "#ffffff",
                    opacity: 0.6,
                }}
                ></div>

                <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "3rem",
                    borderLeft: "2px solid #121212",
                    borderTopRightRadius: "0.375rem",
                    borderBottomRightRadius: "0.375rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
                >
                <SearchIcon />
                </div>
            </div>

            <button
                style={{
                backgroundColor: "#121212",        
                color: "#34C94B",                  
                borderRadius: "0.375rem",
                padding: "0.5rem",
                fontFamily: "Poppins, sans-serif", 
                cursor:"pointer"
                }}
            >
                Give Feedback
            </button>
            </div>
            <Box className="hero-section" bgcolor="#111" padding="2rem" display="flex" alignItems="center" justifyContent="space-between">
                    <Box className="hero-text">
                        <h1>100 Thousand Songs, ad-free</h1>
                        <p>Enjoy music anytime, anywhere</p>
                    </Box>
                    <Box className="hero-image">
                        <img src={heroImage} alt="hero-image" />
                    </Box>
            </Box>



        </>
    )
}

export default Header;
