import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js - Boilerplate</title>
        <link rel="shortcut icon" href="public/img/next-js.svg" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
