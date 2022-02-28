import styles from "../../styles/qr.module.css";

export default function QrCodeComponentDesktop() {
  return (
    <div class={styles.body}>
      <div class={styles.container}>
        <img src="/img-qr/desktop-preview.jpg" alt="layout desktop" />
      </div>
    </div>
  );
}
