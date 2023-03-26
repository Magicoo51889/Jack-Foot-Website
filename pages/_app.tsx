import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingScreen />
      <Component {...pageProps} />
      <Analytics />
      <Header />
      <Footer />
    </>
  );
}

export default MyApp;
