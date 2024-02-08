import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TiltCard from "../components/Image_Tilt_Card";

const TCS = 75; // Tilt Card Size

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Foot | Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jack Foot.</h1>

        <div className={styles.horizontalGrid}>
          <TiltCard
            image={"/HMChair.svg"}
            alt={"Jack Foot Logo"}
            link={"/productDesign"}
            w={TCS}
            h={TCS}
          />
          <TiltCard
            image={"/devdotto.svg"}
            alt={"Typescript Logo"}
            link={"/programming"}
            w={TCS}
            h={TCS}
          />
          <TiltCard
            image={"/profile.svg"}
            alt={"null"}
            link={"/about"}
            w={TCS}
            h={TCS}
          />
        </div>
        <p className={styles.description}>
          Hey I'm Jack.
          <br /> Currently I'm studying Product Design and Technology (BSc) at
          Loughborough University. This course provides me an understanding of
          both designing a product on an artistic level, and also the skills to
          be able to see through the engineering and manufacture of the product
          on a technical level by incorporating the use of CAD and CAM software
          as well as using engineering principles to help me decide if my
          products will be able to hold up to day to day use.
        </p>
        <p className={styles.description}>
          I have a passion for product design and love the work of designers
          such as Dieter Rams and Jony Ive. The creation of innovative and
          functional products that meet the needs and wants of customers and it
          really interests me and other peoples work inspires me to make my own.
          <br /> Good product design has the potential to increase sales and
          profitability, as well as improve customer satisfaction and loyalty.
          Customer experience is a thing that I really care about as when I use
          a product I know that I want it to be easy to use and be intuitive.
        </p>
      </main>
    </div>
  );
};

export default Home;
