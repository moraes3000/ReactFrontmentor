import Head from "next/head";
import styles from "../../styles/order.module.scss";
export default function NftPreviewCardComponent() {
  return (
    <>
      <Head></Head>
      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <img
              src="/03-order-summary/illustration-hero.svg"
              alt="illustration"
            />
          </div>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className={styles.card_footer}>
            <img src="/03-order-summary/icon-music.svg" />
            <div>
              <strong>Annual Plan</strong> $59.99/year
            </div>{" "}
            <a href="#">Change</a>
          </div>
          <div className={styles.card_button}>
            <a href="#">Proceed to Payment </a>
            <a href="#"> Cancel Order</a>
          </div>
        </div>
      </div>
    </>
  );
}
