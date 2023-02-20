import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Header />
      <Footer />
    </>
  );
}

export default MyApp;
