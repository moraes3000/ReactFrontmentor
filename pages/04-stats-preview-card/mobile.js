import styles from "../../styles/qr.module.css";

export default function ComponentMobile() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img
          src="/04-stats-preview-card/mobile-design.jpg"
          alt="layout mobile"
        />
      </div>
    </div>
  );
}
