import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Insituto Mancala</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Instituto Mancala" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
