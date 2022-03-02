import Head from "next/head";
import styles from "../../styles/06-profile-card.module.scss";
export default function IndexComponent() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div class={styles.body}>
        <div class={styles.card}>
          <div class={styles.card_bg}>
            <img src="/06-profile-card/bg-pattern-card.svg" />
          </div>
          <div class={styles.card_body}>
            <img src="/06-profile-card/image-victor.jpg" />
            <h1>
              Victor Crest <span>26</span>
            </h1>
            London
            <hr />
          </div>
          <div class={styles.card_footer}>
            <ul>
              <li>
                <p>
                  <strong>80K</strong>
                  <br />
                  Followers
                </p>
              </li>
              <li>
                <p>
                  <strong>803k</strong> <br />
                  Likes
                </p>
              </li>
              <li>
                <p>
                  <strong>1.4K</strong>
                  <br />
                  Photos Likes
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
