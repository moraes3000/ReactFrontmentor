import styles from "../../styles/qr.module.css";

export default function QrCodeComponentMobile() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src="/img-qr/mobile-design.jpg" alt="layout mobile" />
      </div>
    </div>
  );
}
