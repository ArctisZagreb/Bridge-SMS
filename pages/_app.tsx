import "../styles/globals/_boilerplate.css";
import type { AppProps } from "next/app";
import styles from "./../styles/Root.module.scss";
import { Container } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.root}>
      <Head>
        <title>Bridge SMS</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Intelligent Bridge Assessment Maintenance and Management System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
