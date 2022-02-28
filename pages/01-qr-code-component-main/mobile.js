import styles from "../../styles/qr.module.css";

export default function QrCodeComponentMobile() {
  return (
    <div class={styles.body}>
      <div class={styles.container}>
        <img src="/img-qr/mobile-design.jpg" alt="layout mobile" />
      </div>
    </div>
  );
}
