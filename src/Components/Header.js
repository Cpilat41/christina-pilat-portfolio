import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.links}>
        <Link to="/christina-pilat-portfolio/">About Me</Link> |{" "}
        <Link to="/Contact">Contact</Link> | <Link to="/Resume">Resume</Link>
        <div className={styles.metext}>
          <span className={styles.name}>Christina Pilat</span>
          <br></br>
          <span className={styles.subtitle}>Full Stack Software Developer</span>
          <h4>📍Tampa, FL</h4>
          <div className={styles.profiles}>
            <a
              href="https://www.linkedin.com/in/christina-pilat-97449542/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin |
            </a>
            {"   "}
            <a
              href="https://github.com/Cpilat41"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
