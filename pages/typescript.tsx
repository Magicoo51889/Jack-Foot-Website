import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const TypescriptP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/JF.ico" />
      </Head>
      
      <header className={styles.header}> 
        <ul>
          <ul><a href='/'>Home</a></ul>
          <ul><a href='/github'>Github</a></ul>
          <ul><a href='/nodejs'>Node.js</a></ul>
          <ul><a href='/cSharp'>C#</a></ul>
          <ul><a href='/autodeskConfusion360'>Autodesk</a></ul>
        </ul>
      </header>

      <div className={styles.background}>
        <div className={styles.smallmdball}/>
        <div className={styles.massiveball}/>
        <div className={styles.smallball}/>
        <div className={styles.mediumball}/>
        <div className={styles.largeball}/>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Typescript
        </h1>
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

export default TypescriptP;