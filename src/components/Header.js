
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
            <Box id="navbar" display="flex" alignItems="center" justifyContent="space-between" bgcolor="primary.main" padding="0.5rem" width="100%">

                {/* <Box id="logo"> */}
                    <img src={logo} alt="logo" />
                {/* </Box> */}

                <Box id="search-large-screens" display="flex" alignItems="center" justifyContent="center">
                    <input type="text" class="search-input" placeholder="Search a album of your choice"/>
                    <Button class="search-button" display="flex" alignItems="center" justifyContent="center">
                        <SearchIcon/>
                    </Button>
                </Box>

                <Box id="search-small-screens" display="none" width="70%">
                    <input type="text" class="search-input" display="none" width="75%" />
                    <Button class="search-button" display="none" width="25%">
                        <SearchIcon width="25%" display="none"/>
                    </Button>
                </Box>
{/* 
                <Box id="feedback"> */}
                    <Button id="feedback-navbar-button">
                        <img src={feedback} alt="logo" />
                    </Button>
                {/* </Box> */}
            </Box>
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
