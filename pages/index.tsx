import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TiltCard from "../components/Image_Tilt_Card";

const TCS = 75; // Tilt Card Size

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Foot | Home.</title>
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
            link={"/code"}
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
          designing products to match or even exceed the outlined brief. I spend
          my freetime sketching, sim racing and exploring new designs and
          technologies. I take part in the university's karting league and I am
          part of the motor society and design society, which gives me access to
          workshops and tools to help me develop my skills and knowledge.
        </p>
        <p className={styles.description}>
          I love the work of designers such as Dieter Rams Jony Ive and design
          agency Teenage Engineering. The creation of innovative and functional
          products that meet the needs and wants of customers and it really
          interests me and other peoples work inspires me to make my own.
          <br /> Good product design has the potential to increase sales and
          profitability, as well as improve customer satisfaction and loyalty.
          Customer experience is a thing that I really care about as when I use
          a product, I know that I want it to be easy to use and be intuitive.
        </p>
      </main>
    </div>
  );
};

export default Home;
