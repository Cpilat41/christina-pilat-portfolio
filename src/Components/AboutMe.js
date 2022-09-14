import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/aboutMe.module.css";
import selfie from "../Images/seflie.jpg";
import computergirl3 from "../Images/computergirl3.png";
import Certificate from "../Components/Documents/CDCert.pdf";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.description}>
          <p>
            <p className={styles.about}>A Little Bit About Me</p>
            <p className={styles.name}>Christina Pilat</p>
            <p className={styles.full}>Full Stack Software Developer</p>
          </p>
          <hr></hr>
          <p className={styles.firstDesc}>
            A travel enthusiest with a passion for sustainability, seeking
            beauty in the world of Web Developement
          </p>
          <img src={selfie} className={styles.me} alt="me" />
          <p className={styles.desc}>
            <p>
              Sustainability is a huge reason why I decided to pivot my career
              into the tech field, hoping to channel my skills as a developer
              into making a difference for a better future.
            </p>
            <p>
              As a creative person, I've spent of alot of time making things
              with my hands - painting, building, crocheting, writing - however,
              there is something unique about Web Developement that allows me to
              be creative in a different way. I believe there is an art or
              finese to coding that creates an insatiable need to learn and keep
              growing. That is what also drew me to coding - the knowledge that
              there is always more to learn. And I'm excited to experience it.{" "}
            </p>
            <p>
              <img
                src={computergirl3}
                className={styles.computergirl3}
                alt="girloncomputer"
              />
            </p>
            <p>
              I've also spent a lot of time working in various aspects of
              customer service and while that can very rewarding my biggest
              passion in life is sustainability. My goal is devote my skills to
              a cause rooted in sustainability values.
            </p>
            <p>
              Other interests of mine include 🗺️traveling, 🎺music, 🚶‍♀️hiking,
              🌿nature, 📚fiction.
            </p>
          </p>
          <button className={styles.resumeBtn}>
            <Link to="/resume">See My Resume!</Link>
          </button>
        </div>
        <div className={styles.codingdojo}>
          <h3 className={styles.dojoheader}>Coding Dojo</h3>
          <p className={styles.dojosuccess}>
            <p>
              I decided to try an online coding bootcamp after a few friends of
              mine had talked to me about their careers as web and software
              developers. So I took a short coding class with
              <a href="https://www.shecodes.io/"> SheCodes</a> just to see if
              it's something I thought I could do.
            </p>
            <p>
              When I realized how much I liked it and what could be done with
              coding, it's like the sky opened up and possibilities became
              endless. I realized I've found something so intersting and
              ever-evolving and I was hooked!
            </p>
            <p>
              After months of searching for the right bootcamp I found
              <a href="https://www.codingdojo.com/"> Coding Dojo</a>. I think
              Coding Dojo was uniquely qualified for the kind of education I was
              looking for. I was able to not only learn the material but make
              friends and join an online community I will always cherish.
            </p>
            <a
              href="https://www.shecodes.io/certificates/bda2fb5d3fad97ebca7d48ad1db142d5"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes Certificate
            </a>{" "}
            {" | "}
            <a href={Certificate} target="_blank" rel="noreferrer">
              Coding Dojo Certificate
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutMe;
