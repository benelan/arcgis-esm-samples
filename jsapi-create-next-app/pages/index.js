import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";


// The ArcGIS JSAPI does not currently work with SSR, so we need to disable it for the map component
const EsriMapWithNoSSR = dynamic(() => import("../components/EsriMap"), {
  ssr: false,
});

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <EsriMapWithNoSSR />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
