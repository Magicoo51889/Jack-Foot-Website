import type { InferGetStaticPropsType, NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tilt from 'react-parallax-tilt'
import Link from '../components/NoScrollLink'

let CardTiltAngle:number = 20;
let CardPerspective:number = 2500;

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
        <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href='/productDesign'>
              <p className={styles.card}>
                <span className={styles.logoInvert}>
                  <Image src="/P-Logo.webp" alt="Jack Foot Logo" width={45} height={45} placeholder='blur' blurDataURL='data:...'/>
                </span>
              </p>
            </Link>
          </Tilt>
          <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href='/typescript'>
              <p className={styles.card}>
                <span className={styles.logoInvert}>
                  <Image src="/typescript.webp" alt="Typescript Logo" width={45} height={45} placeholder='empty'/>
                </span>
              </p>
            </Link>
          </Tilt>
          <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href='/nodejs'>
              <p className={styles.card}>
                <span className={styles.logoInvert}>
                  <Image src={"/nodedotjs.webp"} alt="Node.js Logo" width={45} height={45} placeholder='empty'/>
                </span>
              </p>
            </Link>
          </Tilt>
          <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href='/github'>
              <p className={styles.card}>
                <span className={styles.logoInvert}>
                  <Image src={"/github.webp"} alt="Github Logo" width={45} height={45} placeholder='empty'/>
                </span>
              </p>
            </Link>
          </Tilt>
          <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href='/cSharp'>
              <p className={styles.card}>
                <span className={styles.logoInvert}>
                  <Image src="/csharp.webp" alt="C# Logo" width={45} height={45} placeholder='empty'/>
                </span>
              </p>
            </Link>
          </Tilt>
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
