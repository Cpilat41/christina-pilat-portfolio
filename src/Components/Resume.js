import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/resume.module.css";
import plant from "../Images/plant.png";
import Certificate from "../Components/Documents/CDCert.pdf";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className={styles.resumeContainer}>
        <div className={styles.skills}>
          <div>
            <h3>Certifications:</h3>
            <a
              href="https://www.shecodes.io/certificates/bda2fb5d3fad97ebca7d48ad1db142d5"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes Certificate
            </a>{" "}
            <a href={Certificate} target="_blank" rel="noreferrer">
              Coding Dojo Certificate
            </a>
          </div>
          <h3>Technical Skills:</h3>

          <div>
            <p>
              <span className={styles.skillsSpan}>Languages:</span> Javascript,
              HTML, HTML5, CSS, MERN <br></br>
              <br></br>
              <span className={styles.skillsSpan}>
                Framework/Libraries:
              </span>{" "}
              Express, React, Node.JS <br></br>
              <br></br>
              <span className={styles.skillsSpan}>Databases:</span> MongoDB
              <br></br>
              <br></br>
              <span className={styles.skillsSpan}>
                Version Control Systems:
              </span>{" "}
              Git, GitHub<br></br>
              <br></br>
              <p>Front-End & Back-End</p>
            </p>
            <img src={plant} className={styles.mouse} alt="plant" />
            <h3>Other Skills:</h3>
            <p>
              <ul>
                <li>Microsoft Offfice</li>
                <li>Teamwork</li>
                <li>Strategic Planning</li>
                <li>Adaptability</li>
                <li>Time Management</li>
                <li>Problem-solving</li>
                <li>Leadership</li>
                <li>Patience</li>
                <li>Creativity</li>
                <li>Written and Verbal Communication</li>
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projects}>
            <h2>Technical Projects</h2>
            <hr></hr>
            <h3>
              <Link to="/Projects">GrocerySwap Neighborhood-Bartering </Link>|
              Group Project | 2022
            </h3>
            <span className={styles.projectsdesc}>
              MERN based app for trading local food products to reduce waste and
              create eco-friendly food swaps in local neighborhoods.
            </span>
            <ul>
              <li>
                Work with two other students in a team effort to design a full
                CRUD application with functional create, read, update, and
                delete features
              </li>
              <li>
                Integrated React with one-to-many relationships using MongoDB to
                create trade commenting capabilities. Created login and
                registration using back-end validations and web tokens for a
                secure and personal user experience.
              </li>
              <li>
                Implemented Bcrypt’s password hashing to secure sensitive user
                account information
              </li>
              <li>
                Developed and linked 3 models using NoSQL, MongoDB, enabling
                users to comment and track their trades
              </li>
              <li>
                Implemented, designed, and styled CSS for complete responsive
                design
              </li>
            </ul>
            <h3>
              <Link to="/Projects">Abiblio Bookshelf Personal Library</Link> |
              2022
            </h3>
            <span className={styles.projectsdesc}>
              MERN based app for tracking books you want to read based on how
              they make you feel; a personal playlist for books.
            </span>
            <ul>
              <li>
                Developed a full CRUD application featuring create, read,
                update, and delete
              </li>
              <li>
                Leveraged React with CSS to populate list tracking with seamless
                front-end
              </li>
              <li>
                Developed back-end with Express Framework and MongoDB for
                flexible structure
              </li>
              <li>
                Created login and registration using front-end validations and
                web tokens for a secure user experience
              </li>
            </ul>
          </div>
          <div className={styles.experience}>
            <h2>Work Experience</h2>
            <hr></hr>
            <h3>
              Bookkeeper and Administrative Assistant | Pilot Pool Service, Inc
              | 2021-Current
            </h3>
            <ul>
              <li>
                Reconciled invoicing and billing for over 150 accounts using
                Quickbooks and Microsoft Excel
              </li>
              <li>
                Cultivated customer relationships and maintained service
                communication
              </li>
              <li>
                Collected payments, drafted credit cards, and settled account
                balances for over 150 accounts
              </li>
            </ul>
            <h3>Administrative Accounts Receivable | FCS, Inc. | 2019-2021</h3>
            <ul>
              <li>
                Managed billing and invoicing portals for major corporations
                such as Publix and Speedway
              </li>
              <li>
                Maintained accounts receivable invoicing for over 500 accounts
              </li>
              <li>
                Nurtured relationships with high-level clients with utmost
                discretion when dealing with sensitive information
              </li>
              <li>
                Oversaw the out-of-town division of service - managing
                dispatching, communication, and problem-solving
              </li>
              <li>
                Collaborated with a team to maintain a positive working
                environment
              </li>
            </ul>
            <h3>
              Blogger | Co-Founder of{" "}
              <a
                href="http://fromunderapalmtree.com/"
                target="_blank"
                rel="noreferrer"
              >
                Fromunderapalmtree.com
              </a>{" "}
              | 2016-2018
            </h3>
            <ul>
              <li>Designed and deployed the website using WordPress hosting</li>
              <li>
                Managed SEO and social media including Facebook, Twitter, and
                Instagram using Tailwind and Hootsuite{" "}
              </li>
            </ul>
          </div>
          <div className={styles.projects}>
            <h2>Education</h2>
            <hr></hr>
            <h3>Full-Stack Software Developer | Coding Dojo - 2022</h3>
            <h3>
              Business Management Organizational Leadership Bachelor's Degree |
              St. Pete College - 2014
            </h3>
            <h4>SheCodes Coding Introduction Course | January 2022</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Resume;
