import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/travel.module.css";
import computergirl2 from "../Images/computer2.png";

const Travel = () => {
  return (
    <div>
      <Header />
      <div className={styles.travel}>
        <h1>In 2018 I took a bit of a Travel Sabatical from working full time</h1>
        <img
          src={computergirl2}
          className={styles.travelcomputer}
          alt="travelgirlonlaptop"
        />

        <p className={styles.travelS}>
          <p>
            My husband and I have always been travelers. We've traveled across
            the country 3 seperate times.
          </p>
          <p>
            In January of 2018, a month after our wedding, my husband and I
            bought a 2002 Dodge Ram Van and began a 3 month process of gutting
            and rebuilding it into our new home.
          </p>
          <p>
            In May, we started living in our van full time and began traveling
            accross the United States. We started in Florda, our home state. And
            slowly made our way up the east coast all the way to Portland,
            Maine. Amid our escapaids of exploring the outdoors and historical
            cities we visited friends along the way. Friends in Washington D.C.,
            Philedalphia, Massachusettes, New York, and Vermont.
          </p>
          <p>
            Then in August of 2018 we journeyed west and made it all the way to
            the coast of Washignton, where we saw the Pacific coast for the
            first time that September. We decided to try our hand at living
            someone new for the first time ever and lived in Seattle for 3 and
            half months. Nate and I worked for a cleaning company, cleaning
            houses, cleaning the Nintendo Warehouse, cleaning the Seattle
            Ballet. I also worked at Target and he drove for Uber. We stayed for
            nearly 4 lonely months and then drove to California for Christmas.
          </p>
          <p>
            After having to come home to Florida for an unexpected family
            exmergency, we sold our van. But we felt we had unfinished businesss
            on the road and instead bought a Runaway Camper. We spent 2 months
            in a 4x8 bedroom on wheels and traveled across the country yet
            again. Visiting over 15 National Parks along the way. And thankfully
            we made it home before the COVID19 pandemic hit. We've been back in
            Florida ever since.
          </p>
          <h3>Best Experience on the Road:</h3>
          <p>
            Seeing our favorite band in concert in what they call Heaven's Ampitheater in Washington State.
            It was a dream come true and we were actually able to do it twice, once in 2018 & again in 2019.
            </p>
            <h3>Worst Experience on the Road:</h3>
            <p>
            Getting the news that my mother-in-law had passed.
            </p>
            <h3>Scariest Experience on the Road:</h3>
            <p>
              There were quite a few scary experiences but nothing comes close to our van breaking down
              on the side of a mountain in Northern California with no service and no one knew we were there.
              We learned a lot from that night and thankfully we made it our unscathed but it was the most
              terrifing experience of my life.
            </p>
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default Travel;
