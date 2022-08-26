import React from "react";
import Header from "./Header";
import styles from "../styles/contact.module.css";
import linkedinicon from "../Images/linkedinicon.png";
import emailicon from "../Images/emailicon.png";
import instagramicon from "../Images/instagramicon.png";
import twittericon from "../Images/twittericon.png";
import facebookicon from "../Images/facebookicon.png";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.topbox}>
        <p className={styles.socialsp}>
          <span>Contact Me!</span>
          <br></br>
          <img src={emailicon} alt="emailicon" className={styles.icons} />
          <a
            href="https://www.linkedin.com/in/christina-pilat-97449542/"
            target="_blank"
          >
            {" "}
            <img
              src={linkedinicon}
              alt="linkedinicon"
              className={styles.icons}
            />
          </a>
          <a
            href="https://www.instagram.com/lostinloveanddancing/"
            target="_blank"
          >
            <img src={instagramicon} alt="instagram" className={styles.icons} />
          </a>
          <a href="https://twitter.com/Cpilat41" target="_blank">
            <img src={twittericon} alt="twitter" className={styles.icons} />
          </a>
          <a href="https://www.facebook.com/cpilat1/" target="_blank">
            <img src={facebookicon} alt="facebook" className={styles.icons} />
          </a>
        </p>
      </div>
      {/* <div className={styles.contactContainer}>
        <div className={styles.leftBox}>Let's Talk Tech</div>
        <div className={styles.middleBox}>
          <span>
            <h2>Socials</h2>
          </span>
        </div>
        <div className={styles.rightBox}>See what I can do!</div>
      </div> */}
    </div>
  );
};

export default Contact;
