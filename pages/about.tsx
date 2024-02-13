import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const AboutP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Foot | About.</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.twoOneGrid}>
          <div className={styles.twoOneGridItem}>
            <div className={styles.gridChild}>
              {/* <Image
                src={"/AboutMePage/Me.jpeg"}
                alt={"Jack Foot Logo"}
                className={styles.gridSquareImage}
                width={700}
                height={700}
                loading="lazy"
              /> */}

              <figure className={styles.aboutImage}></figure>
            </div>
          </div>
          <div className={styles.twoOneGridItem}>
            <div className={styles.gridChild}>
              <h1 className={styles.smallTitle}>About.</h1>
              <p className={styles.smallDescription}>
                Currently I'm studying Product Design and Technology (BSc) at
                Loughborough University. This course provides me an
                understanding of both designing a product on an artistic level,
                and also the skills to be able to see through the engineering
                and manufacture of the product on a technical level by
                incorporating the use of CAD and CAM software as well as using
                engineering principles to help me decide if my products will be
                able to hold up to day to day use. I have experience using
                BS8888 to produce compliant engineering drawings for
                manufacturing parts and products. Good product design has the
                potential to increase sales and profitability, as well as
                improve customer satisfaction and loyalty. Customer experience
                is a thing that I really care about as when I use a product I
                know that I want it to be easy to use and be intuitive, as well
                as create a great experience when using it.
              </p>
              <p className={styles.smallDescription}>
                I am deeply interested in cars too, both in terms of the design
                and shape of cars, as well as the actual driving and how they
                feel behind the wheel. I find that cars and product design have
                lots in common as the shape and aesthetics of a car could make
                or break it, same as a product but the experience greatly impact
                how the end product works and how much the user ends up liking
                it.
              </p>
              <p className={styles.smallDescription}>
                In addition to this I am a passionate driver, who currently uses
                a racing simulator to drive virtually round some of the most
                famous circuits in the world, such as: Nurburgring,
                Nordschliefe, Brands Hatch, Spa Francorchamps, The Top Gear Test
                Track and many more. I hope to one day be able to drive my own
                track car to these circuits and experience them in real life. My
                all time favourite car is the classic 1987 Porsche 930 Turbo,
                with a 3.3L flat six air cooled engine, rear wheel drive, 4
                seater, 2 door coupe. The lines of the car are perfect, and make
                the car look as though it is at speed, even at a stand still.
                Simply put, it is a work of art.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutP;
