import { Settings, UserPen } from "lucide-react";
import ChartComponent from "../chartComponent/ChartComponent";
import styles from "./charbar.module.scss";
import { ChartDocument } from "../chartDocument/ChartDocument";
import { UpgradePlan } from "../upgradePlanCard/UpgradePlan";
import profile from "../../assets/profile.jpg";
import { dataMainCard } from "../../mock/ChartMock";

export const ChartBar = () => {
  return (
    <aside className={styles.rightBar}>
      <div className={styles.chartHeaderContainer}>
        <div className={styles.chartContainerMenu}>
          <div className={styles.chartIconContainer}>
            <Settings size={20} />
            <UserPen size={20} />
          </div>
          <div className={styles.imgContainer}>
            Name
            <img src={profile} className={styles.imgSidebar} alt="profile" />
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <h2>Storage</h2>
        <ChartComponent data={dataMainCard} />
        <div className={styles.storageResult}>
          <p>420.2 GB of 500 GB used</p>
        </div>
        <div className={styles.resumeChartContainer}>
          {dataMainCard.map((chart) => {
            return <ChartDocument chartData={chart} key={chart.id} />;
          })}
        </div>
        <div className={styles.upgradePlanContainer}>
          <UpgradePlan />
        </div>
      </div>
    </aside>
  );
};
