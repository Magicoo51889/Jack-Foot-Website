import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

let SocialIconSize = 44;

const autodeskP = () => {
  return (
    <div className={styles.container}>
        <Head>
          <title>Jack Website</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/JF.ico" />
        </Head>
        
        <main className={styles.main}>
          <h1 className={styles.code} style={{background: '#F2382D', color:'white', textAlign:'center'}}>
            This page is still in active development, and is not yet complete. Thanks for your patience, and sorry for any inconvenience caused.
          </h1>
          <div className={styles.twoOneGrid}>
            <div className={styles.gridChild} style={{background:'#F5F5F7'}}>
              <div className={styles.lightGreyColour}>
                <div className={styles.twoThreeGrid}>
                  <Image src="/autodesk.svg" alt="Autodesk Logo" className={styles.gridChildImage} width={100} height={100} />

                </div>
              </div>
            </div>   
            <div className={styles.gridChild}>
              <h1 className={styles.smallTitle}>
                Product Design.
              </h1>
              <p className={styles.smallDescription}>
                I really enjoy sketching and coming up with designs that I think will improve an existing idea or concept and turn it into something that will help users to perform that task.
              </p>
              <p className={styles.smallDescription}>
                My inspiration comes from the likes of Dieter Rams, Jony Ive and James Dyson, all people who have raised the bar of what to expect from a product. They all prioritise function over form, and I think this is essential when designing a product, as nothing infuriates me more than something that is difficult or hard to figure out how to use. Overall their designs have revolutionised the way we use products and I that is something that I would like to achieve in my own designs.
              </p>
              <p className={styles.smallDescription}>
                I have lots of experience with sketching and designing products, and I have a good understanding of how to use the software that is used in the industry. I have also worked on a few projects that have been prototyped and tested, and I have been able to see the feedback from users and how they interact with the product. This has enabled me to develop those products further to be able to try and meet all the criteria that my user has asked for.
              </p>
              <p className={styles.smallDescription}>
                Jack F.
              </p>
            </div>         
          </div>

        </main>
    </div>
  )
}

export default autodeskP;