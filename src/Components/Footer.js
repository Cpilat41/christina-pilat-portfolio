import React from "react";
import styles from "../styles/footer.module.css";
import linkedinicon from "../Images/linkedinicon.png";
import emailicon from "../Images/emailicon.png";
import instagramicon from "../Images/instagramicon.png";
import twittericon from "../Images/twittericon.png";
import facebookicon from "../Images/facebookicon.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.topbox}>
        <p className={styles.socialsp}>
          <h4 className={styles.header}>Contact Me!</h4>
          <a href="mailto:cpilat41@gmail.com">
            <img src={emailicon} alt="emailicon" className={styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/christina-pilat-97449542/"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <img src={instagramicon} alt="instagram" className={styles.icons} />
          </a>
          <a
            href="https://twitter.com/Cpilat41"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twittericon} alt="twitter" className={styles.icons} />
          </a>
          <a
            href="https://www.facebook.com/cpilat1/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookicon} alt="facebook" className={styles.icons} />
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
