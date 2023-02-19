import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

let SocialIconSize = 44;

const CSharpP = () => {
  return (
    <div className={styles.container}>
        <Head>
          <title>Jack Website</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/JF.ico" />
        </Head>
        
        <header className={styles.globalnav}> 
          <ul className={styles.globalnavList}>
            <ul className={styles.globalnavItem}>
              <a href='/'>
                <span>
                  Home
                </span>
              </a>
            </ul>
            <ul className={styles.globalnavItem}>
              <a href='/typescript'>
                <span>
                  Typescript
                </span>
              </a>
            </ul>
            <ul className={styles.globalnavItem}>
              <a href='/nodejs'>
                <span>
                  Node.js
                </span>
              </a>
            </ul>
            <ul className={styles.globalnavItem}>
              <a href='/github'>
                <span>
                  Github
                </span>
              </a>
            </ul>
            <ul className={styles.globalnavItem}>
              <a href='/cSharp'>
                <span>
                  C#
                </span>
              </a>
            </ul>
            <ul className={styles.globalnavItem}>
              <a href='autodeskConfusion360'>
                <span>
                  Autodesk
                </span>
              </a>
            </ul>
          </ul>
      </header>

        <main className={styles.main}>
            <h1 className={styles.title}>
                C# & .NET
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

export default CSharpP;