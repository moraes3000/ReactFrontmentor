import Head from "next/head";
import styles from "../../styles/setup.module.scss";
export default function IndexComponent() {
  return (
    <>
      <Head></Head>
      <div className={styles.body}>
        <div className={styles.card}>Setup</div>
      </div>
    </>
  );
}
