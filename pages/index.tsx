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
        <meta name="description" content="A portfolio of my skills, and projects that I have worked on." />
        <meta property="og:image" content="./public/JF.ico"></meta>
        <meta property="og:title" content="Jack Foot Portfolio Website"></meta>
        <meta property="og:description" content="A portfolio of my skills, and projects that I have worked on." />
        <meta property="og:url" content="https://jack-foot-website.vercel.app/"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href="/JF.ico" />
        <noscript> You need to enable Javascript to run this website </noscript>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jack Foot</h1>

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
          <br /> I'm a student and currently studying Product Design, Physics and Computer Science
          A-Levels. I've also taken a key part in the development of my school's
          Greenpower racing car, which is a fully electric car that competes in
          the Greenpower Challenge. I was part of both Mechancial and Electrical
          Engineering elements of the car.
        </p>
        <p className={styles.description}>
          I have a massive passion for product design and love the work of
          designers such as Dieter Rams and Jony Ive. The creation of innovative
          and functional products that meet the needs and wants of customers and
          it really interests me and other peoples work inspires me to make my
          own.
          <br /> Good product design has the potential to increase sales and
          profitability, as well as improve customer satisfaction and loyalty.
          Customer experience is a thing that I really care about as when I use
          a product I know that I want it to be easy to use and be intuitive.
        </p>
        <p className={styles.description}>
          In today's world, technology is everywhere, and it is becoming
          increasingly difficult to find a product that doesn't use digital
          connections in it. Whilst this is a great innovation and can lead to
          better response times and more accurate results, it takes away from
          the overall experience of a product. For example, a car with a manual
          gearbox is much more engaging to drive than a car with an automatic
          gearbox, as you have to think about what gear you are in and when to
          change gear, as well as the clutch control. This makes the driving
          experience much more engaging and fun, as you have to think about what
          you are doing, rather than just pressing a button and the car does it
          for you. This is why I think that technology should be used in
          moderation, alongside classic mechanical systems to create a
          responsive but engaging and fun product. Take the Lotus Elise for
          example, it is a car that has no power steering, no ABS, no traction
          control, no air conditioning, no power assisted
          brakes, no power assisted clutch, no power assisted gearbox, no power
          assisted anything. It is a car that is designed to be as light as
          possible, and as engaging as possible. It is a car that requires you
          to drive, rather than to be driven and that is what makes it so great. This mentality is what I want to bring to my designs, as I want to create products that are engaging and fun to use, rather than just being a tool to do a job, that assists you in everyway and strips it of any uniqueness or character.
        </p>
      </main>
    </div>
  );
};

export default Home;
