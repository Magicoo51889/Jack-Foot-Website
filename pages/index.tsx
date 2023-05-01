import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TiltCard from '../components/Image_Tilt_Card'

const TCS = 75; // Tilt Card Size

const Home: NextPage = () => {      
  return (
    <div className={styles.container}>
      <Head>
          <title>Jack Website</title>
          <meta name="description" content="Portfolio Website" />
          <link rel="icon" href="/JF.ico" />
          <noscript> You need to enable Javascript to run this website </noscript>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jack Foot
        </h1>

        <div className={styles.horizontalGrid}>
          <TiltCard image={"/HMChair.svg"} alt={"Jack Foot Logo"} link={"/productDesign"} w={TCS} h={TCS} />
          <TiltCard image={"/devdotto.svg"} alt={"Typescript Logo"} link={"/programming"} w={TCS} h={TCS} />
          <TiltCard image={"/profile.svg"} alt={"null"} link={"/about"} w={TCS} h={TCS} />
        </div>
        
        <p className={styles.description}>
          Hey I'm Jack.
          <br/> I'm a student and I love coding. I've been coding since 2021 and I'm currently learning Next.js and React.js, to make dynamic websites and high performance applications.
        </p>
        <p className={styles.description}>
          I'm currently studying Product Design, Physics and Computer Science A-Levels.
          <br/> I've also taken a key part in the development of my school's Greenpower racing car, which is a fully electric car that competes in the Greenpower Challenge. I was part of both Mechancial and Electrical Engineering elements of the car.
        </p>
        <p className={styles.description}>
          I have a massive passion for product design and love the work of designers such as Dieter Rams and Jony Ive. The creation of innovative and functional products that meet the needs and wants of customers and it really interests me and other peoples work inspires me to make my own.<br/> Good product design has the potential to increase sales and profitability, as well as improve customer satisfaction and loyalty. Customer experience is a thing that I really care about as when I use a product I know that I want it to be easy to use and be intuitive. 
        </p>
      </main>
    </div>
  )
}

export default Home
