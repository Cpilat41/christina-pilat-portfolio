import React from "react";
import Header from "./Header";
import styles from "../styles/aboutMe.module.css";
import selfie from "../Images/seflie.jpg";
import computergirl3 from "../Images/computergirl3.png";
import computergirl2 from "../Images/computer2.png";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.description}>
          <span className={styles.about}>A Little Bit About Me</span><br></br>
          <span className={styles.name}>Christina Pilat</span><br></br>
          <span className={styles.full}>Full Stack Software Developer</span><br></br>
          <hr></hr>
          <p>
            A travel enthusiest with a passion for sustainability,
            seeking beauty in the world of Web Developement
          </p>
          <img src={selfie} className={styles.me} alt="me" />
          <p className={styles.desc}>
            As a creative person I've spent a lot of time making things with my
            hands - painting, building, crochet, writing, etc.. But there's
            something uniquely fun and creative about Web Developement. <br></br>
          <img src={computergirl3} className={styles.computergirl3} /><br></br>
            I've also spent a lot of time working in various aspects of customer
            service and while that can very rewarding my biggest passion in life
            is sustainability. My goal is devote my skills to a cause rooted in
            sustainability values.
            <br></br>
            <br></br>
            Other interests of mine include 🗺️traveling, 🎺music, 🚶‍♀️hiking,
            🌿nature, 📚fiction.
          </p>
        </div>
        <div className={styles.codingdojo}>
          <h3>Coding Dojo</h3>
          <p>
            I decided to try an online coding bootcamp after a few friends of
            mine had talked to me about their careers as web and software
            developers. So I took a short coding class with SheCodes just to see
            if it's something I thought I could do. And when I realized how much
            I liked it and what could be done with coding, it's like the sky
            opened up and possibilities became endless. I realized I've found
            something so intersting and ever-evolving and I was hooked! So after
            months of searching for the right bootcamp I found Coding Dojo. I
            think Coding Dojo was uniquely qualified for the kind of education I
            was looking for. I was able to not only learn the material but make
            friends and join an online community I will always cherish.
          </p>
        </div>
        <div className={styles.travel}>
          <img src={computergirl2} className={styles.travelcomputer} />
          <h3>Travel Sabatical</h3>
          
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
