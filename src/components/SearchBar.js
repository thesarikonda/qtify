import React from "react";
import styles from "./Navbar.css";
import Logo from "../assets/logo.png";
import SearchBar from "./SearchBar.js";
import Button from "./Button.js";

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default Navbar;