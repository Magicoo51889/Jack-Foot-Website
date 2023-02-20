import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

let SocialIconSize = 44;

const NodejsP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/JF.ico" />
      </Head>
      
      <nav className={styles.globalnav}> 
          <ul className={styles.globalnavList}>
            <ul className={styles.globalnavItem}>
              <Link href='/'>
                <span>
                  Home
                </span>
              </Link>
            </ul>
            <ul className={styles.globalnavItem}>
              <Link href='productDesign'>
                <span>
                  Product Design
                </span>
              </Link>
            </ul>
            <ul className={styles.globalnavItem}>
              <Link href='/typescript'>
                <span>
                  Typescript
                </span>
              </Link>
            </ul>
            <ul className={styles.globalnavItem}>
              <Link href='/nodejs'>
                <span>
                  Node.js
                </span>
              </Link>
            </ul>
            <ul className={styles.globalnavItem}>
              <Link href='/github'>
                <span>
                  Github
                </span>
              </Link>
            </ul>
            <ul className={styles.globalnavItem}>
              <Link href='/cSharp'>
                <span>
                  C#
                </span>
              </Link>
            </ul>
          </ul>
      </nav>

      <main className={styles.main}>
          <h1 className={styles.title}>
              Node.js
          </h1>
          <p className={styles.code}>
          This page is still in development! Thanks for your patience.
        </p>
      </main>

      <footer className={styles.footer}> {/*Links to socials*/}
        <a
          href="https://www.linkedin.com/in/jackfoot51889/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/linkedin.svg" alt="Linkedin Logo" width={SocialIconSize} height={SocialIconSize} />
          </span>
        </a>
        <a
        href="https://github.com/Magicoo51889"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/github.svg" alt="Github Logo" width={SocialIconSize} height={SocialIconSize}/>
          </span>
        </a>
        <a
        href="https://twitter.com/jjaffff"
        target="_blank"
        rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logoInvert}>
            <Image src="/twitter.svg" alt="Twitter Logo" width={SocialIconSize} height={SocialIconSize}/>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default NodejsP;