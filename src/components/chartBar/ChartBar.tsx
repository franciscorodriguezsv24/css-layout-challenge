import {
  Headphones,
  Image,
  LayoutGrid,
  Paperclip,
  Settings,
  UserPen,
} from "lucide-react";
import ChartComponent from "../chartComponent/ChartComponent";
import styles from "./charbar.module.scss";
import { ChartDocument } from "../chartDocument/ChartDocument";
import { UpgradePlan } from "../upgradePlanCard/UpgradePlan";
import profile from "../../assets/profile.jpg";

export const ChartBar = () => {
  const data = [
    {
      id: 1,
      name: "Photos",
      quantity: 720,
      value: 200,
      color: "#ff9f00",
      icon: Image,
    },
    {
      id: 2,
      name: "Applications",
      quantity: 360,
      value: 125,
      color: "#689ff8",
      icon: LayoutGrid,
    },
    {
      id: 3,
      name: "Music",
      quantity: 170,
      value: 75,
      color: "#4ac29d",
      icon: Headphones,
    },
    {
      id: 4,
      name: "Documents",
      quantity: 125,
      value: 50,
      color: "#858a9d",
      icon: Paperclip,
    },
  ];
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
        <ChartComponent data={data} />
        <div className={styles.storageResult}>
          <p>420.2 GB of 500 GB used</p>
        </div>
        <div className={styles.resumeChartContainer}>
          {data.map((chart) => {
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
