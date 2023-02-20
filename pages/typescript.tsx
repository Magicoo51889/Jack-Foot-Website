import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

let SocialIconSize = 44;

const TypescriptP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/JF.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
            Typescript
        </h1>
        <p className={styles.code}>
          This page is still in development! Thanks for your patience.
        </p>
      </main>
    </div>
  )
}

export default TypescriptP;