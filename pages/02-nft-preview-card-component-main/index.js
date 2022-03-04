import Head from "next/head";
import styles from "../../styles/nft.module.scss";
export default function NftPreviewCardComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img
              src="/img-nft-preview-card-component-main/image-equilibrium.jpg"
              alt="logo"
            />
          </div>
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div>
            <span>
              <img
                src="/img-nft-preview-card-component-main/icon-ethereum.svg"
                alt="icon-ethereum"
              />
              0.041 ETH
            </span>
            <span>
              <img
                src="/img-nft-preview-card-component-main/icon-clock.svg"
                alt="clock"
              />
              3 days left
            </span>
          </div>
          <hr />
          <div className={styles.footer_card}>
            <img
              src="/img-nft-preview-card-component-main/image-avatar.png"
              alt="avatar"
            />
            Creation of <span> Jules Wyvern</span>
          </div>
        </div>
      </div>
    </>
  );
}
