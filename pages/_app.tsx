import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="description" content="A portfolio of my skills, and projects that I have worked on." />
      <meta property="og:image" content="./public/JF.ico"></meta>
      <meta property="og:title" content="Jack Foot Portfolio Website"></meta>
      <meta property="og:description" content="A portfolio of my skills, and projects that I have worked on." />
      <meta property="og:url" content="https://jack-foot-website.vercel.app/"></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <link rel="icon" href="/JF.ico" />
      <noscript> You need to enable Javascript to run this website </noscript>
      <LoadingScreen />
      <Component {...pageProps} />
      <Analytics />
      <Header />
      <Footer />
    </>
  );
}

export default MyApp;
