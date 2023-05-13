import Head from "next/head";
import styles from "../styles/Home.module.css";

const programmingP = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Foot | Programming</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Programming</h1>
        <p className={styles.description}>
          I have been programming since 2021 and have learnt a lot of different
          languages and technologies, whether that be in school or due to my own
          interest. I mainly use Typescript which is a typed superset of JavaScript that
          compiles to plain JavaScript. It provides types for variables,
          functions, and classes. It is a great tool for catching errors early
          and making code more readable.
        </p>
        <p className={styles.description}>
          I have used typescript for a variety of uses that allow me to be able
          to easily make a program that is easy to read and understand. This
          website for example is made using react and typescript which allow the
          site to be type safe and less likely to have errors. Additionally
          Typescript (and Javascript) are really easy and intuitive to use and
          learn, with easy to understand syntax and extensive documentation and
          guides online, that you can build upon and add to your own projects. I
          find that Typescript is a great tool for beginners and experienced
          programmers alike, as it can be easily adapted to a multitude of
          different projects and uses.
        </p>
        <p className={styles.description}>
          In addition to those I have also used C#, WPF and XAML which I used
          whilst doing my Renishaw Work Experience week. I really enjoyed using
          C#, and found the syntax to make lots of sense and I loved creating an
          application that we could interact and use. We used Visual Studio to
          create the program and this meant that we were able to easily create
          unit tests and this helped to make sure that modules we made would
          work before building the application.
        </p>
      </main>
    </div>
  );
};

export default programmingP;
