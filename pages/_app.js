import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">mili</a>
      </h1>

      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
