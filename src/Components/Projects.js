import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/projects.module.css";
import Abiblio from "../Images/Abiblio-Bookshelf.gif";
import GS from "../Images/Grocery-Swap.gif";
const Projects = () => {
  return (
    <div>
      <Header />
      <div className={styles.projectsHeaderContainer}>
        <h1 className={styles.projectsHeader}>Technical Projects</h1>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.abiblio}>
          <h3 className={styles.projectTitles}>
            <a
              href="https://github.com/Cpilat41/PersonalLibrary"
              target="_blank"
              rel="noreferrer"
            >
              Abiblio-Bookshelf
            </a>
          </h3>
          <a
            href="https://github.com/Cpilat41/PersonalLibrary"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Abiblio}
              alt="Abiblio-Bookshelf gif"
              className={styles.abiblioGif}
            />
          </a>
        </div>

        <div className={styles.grocerySwap}>
          <h3>
            <a
              href="https://github.com/RobertsonTanya/Neighborhood-Bartering"
              target="_blank"
              rel="noreferrer"
            >
              GrocerySwap
            </a>
          </h3>
          <a
            href="https://github.com/RobertsonTanya/Neighborhood-Bartering"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GS}
              alt="GrocerySwap Gif"
              className={styles.grocerySwapGif}
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
