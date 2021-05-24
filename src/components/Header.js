import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import  logo  from "../img/logo.png";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className={styles.logoHeader}
          src={logo}
          alt="Logo do portal do Rick and Morty"
        />
      </Link>
      <ul>
        <li>
          <Link className={styles.navLink} to="characters">
            Characters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
