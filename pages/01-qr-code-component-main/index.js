import styles from "../../styles/qr.module.css";
import Head from "next/head";
export default function QrCodeComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class={styles.body}>
        <div class={styles.container}>
          <div class={styles.box}>
            <img src="/img-qr/image-qr-code.png" alt="Picture of the author" />
            <div class={styles.content}>
              <h1>Improve your front-end skills by building projects</h1>
              <p>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
