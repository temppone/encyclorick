import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        {/* <img
          className={styles.logoHeader}
          src={logo}
          alt="Logo do portal do Rick and Morty"
        /> */}
        <div className="portalOrganic"></div>
      </Link>
      <ul>
        <li>
          <Link className={styles.navLink} to="/characters">
            Personagens
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
