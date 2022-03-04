import Head from "next/head";
import styles from "../../styles/stats-preview.module.scss";
export default function NftPreviewCardComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.body}>
        <div className={styles.card}>
          <img
            src="/04-stats-preview-card/image-header-desktop.jpg"
            alt="img"
          />
          <div className={styles.card_body}>
            <div className={styles.card_header}>
              <h1>
                Get <span>insights</span> that help your business grow.
              </h1>
            </div>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className={styles.card_footer}>
              <div>
                <span>10k+</span>
                <br />
                companies
              </div>
              <div>
                <span>314</span> <br />
                templates
              </div>
              <div>
                <span>12m+</span> <br /> queries
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
