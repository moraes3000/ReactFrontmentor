import Head from "next/head";
import styles from "../../styles/setup.module.scss";
export default function IndexComponent() {
  return (
    <>
      <Head></Head>
      <div class={styles.body}>
        <div class={styles.card}>Setup</div>
      </div>
    </>
  );
}
