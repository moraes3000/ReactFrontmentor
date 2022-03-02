import Head from "next/head";
import styles from "../../styles/stats-preview.module.scss";
export default function NftPreviewCardComponent() {
  return (
    <>
      <Head></Head>
      <div class={styles.body}>
        <div class={styles.card}>
          Get insights that help your business grow. Discover the benefits of
          data analytics and make better decisions regarding revenue, customer
          experience, and overall efficiency. 10k+ companies 314 templates 12m+
          queries
        </div>
      </div>
    </>
  );
}
