import styles from "../../styles/qr.module.css";

export default function ComponentDesktop() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img
          src="/04-stats-preview-card/desktop-design.jpg/"
          alt="layout desktop"
        />
      </div>
    </div>
  );
}
