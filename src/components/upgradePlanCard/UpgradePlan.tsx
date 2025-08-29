import styles from "./upgradeplan.module.scss";

export const UpgradePlan = () => {
  return (
    <div className={styles.upgradePlanContainer}>
      <div className={styles.rainbowContainer}></div>
      <div>
        <h4>Buy more space now!</h4>
        <p>Upgrade to cloud premium</p>
      </div>
      <button>Upgrade Account!</button>
    </div>
  );
};
