import Head from "next/head";
import styles from "../../styles/05-3-column.module.scss";
export default function IndexComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_item}>
            <img
              src="/05-3-column-preview-card/icon-sedans.svg"
              alt="icon-sedans.svg"
            />

            <h1> Sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className={styles.wrapper_item}>
            <img
              src="/05-3-column-preview-card/icon-suvs.svg"
              alt="icon-suvs.svg"
            />
            <h1>SUVs</h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className={styles.wrapper_item}>
            <img
              src="/05-3-column-preview-card/icon-luxury.svg"
              alt="icon-luxury.svg"
            />
            <h1>Luxury</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}
