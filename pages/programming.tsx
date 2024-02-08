import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

const programmingP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Foot | Programming</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.twoOneGrid}>
          <div className={styles.gridChild}>
            <h1 className={styles.smallTitle}>Code.</h1>
            <p className={styles.smallDescription}>
              I have been programming since 2021 and have learnt a lot of different
              languages and technologies, whether that be in school or due to my own
              interest. I mainly use Typescript which is a typed superset of
              JavaScript that compiles to plain JavaScript. It provides types for
              variables, functions, and classes. It is a great tool for catching
              errors early and making code more readable.
            </p>
            <p className={styles.smallDescription}>
              At University I am also learning to use Arduino which allows me to
              create electronic features for products I develop. This allows me to
              produce more interactive and technically advanced products.
            </p>
          </div>
          <div className={styles.gridChild}>
            <Image src={"/programmingPage/TypescriptProgramming.avif"} alt={"TypeScript Programming Example"} className={styles.gridImage} width={1008} height={894} loading="lazy"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default programmingP;
