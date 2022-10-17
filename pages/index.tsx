import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/JF.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jack Foot
        </h1>

        <p className={styles.description}>
          Hey I'm Jack. I'm a student and I love to <code className={styles.code}>code!</code> I've been coding for 2 years and I'm currently learning Next.js and React.js, to make dynamic websites.
        </p>
        <div className={styles.horizontalGrid}>
            <a href='/typescript'>
              <p className={styles.card}>
                Typescript
                <span className={styles.logoInvert}>
                  <Image src="/typescript.svg" alt="Typescript" width={15} height={15}/>
                </span>
              </p>
            </a>
          <a href='/nodejs'>
            <p className={styles.card}>
              Node.js 
              <span className={styles.logoInvert}>
                <Image src={"/nodedotjs.svg"} alt="Node.js Logo" width={15} height={15} />
              </span>
            </p>
          </a>
          <a href='/github'>
            <p className={styles.card}>
              Github 
              <span className={styles.logoInvert}>
                <Image src={"/github.svg"} alt="Github Logo" width={15} height={15} />
              </span>
            </p>
          </a>
          <a>
            <p className={styles.card}>
              C# 
              <span className={styles.logoInvert}>
                <Image src="/csharp.svg" alt="C#" width={15} height={15}/>
              </span>
            </p>
          </a>
          <a>
            <p className={styles.card}>
              Fusion360 
              <span className={styles.logoInvert}>
                <Image src="/autodesk.svg" alt="autodesk logo" width={15} height={15}/>
              </span>
            </p>
          </a>
        </div>
      </main>



      <footer className={styles.footer}> {/*Links to socials*/}
        <a
          href="https://www.linkedin.com/in/jackfoot51889/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/linkedin.svg" alt="Linkedin Logo" width={22.5} height={22.5} />
          </span>
        </a>
        <a
        href="https://github.com/Magicoo51889"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/github.svg" alt="Github Logo" width={22.5} height={22.5}/>
          </span>
        </a>
        <a
        href="https://twitter.com/jjaffff"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/twitter.svg" alt="Twitter Logo" width={22.5} height={22.5}/>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
