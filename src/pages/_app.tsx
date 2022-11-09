import { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Insituto Mancala</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Instituto Mancala"
        />
      </Head>

      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
