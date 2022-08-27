import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/contact.module.css";
import selfie from "../Images/seflie.jpg";


const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.topbox}>
        <div className={styles.selflebox}>
          <img src={selfie} className={styles.selfie} />
        </div>
        <div className={styles.socialsp}>
          <h4>My Contact Information</h4>
          <p>Email: Cpilat41@gmail.com</p>
          <p>
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/christina-pilat-97449542/"
              target="_blank"
              rel="noreferrer"
            >
              christina-pilat-97449542/
            </a>
          </p>
          <p>
            Twitter:{" "}
            <a
              href="https://twitter.com/Cpilat41"
              target="_blank"
              rel="noreferrer"
            >
              @Cpilat41
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Cpilat41"
              target="_blank"
              rel="noreferrer"
            >
              Cpilat41
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
