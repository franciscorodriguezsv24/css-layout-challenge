import { type LucideProps } from "lucide-react";
import styles from "./chartdocument.module.scss";
type ChartDocs = {
  name: string;
  quantity: number;
  value: number;
  color: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

type ChartProps = {
  chartData: ChartDocs;
};
export const ChartDocument = ({ chartData }: ChartProps) => {
  return (
    <div className={styles.chartDocumentContainer}>
      <div className={styles.chartDocumentHeader}>
        <chartData.icon color={chartData.color} />
        <div className={styles.chartDocumentTitle}>
          <h4>{chartData.name}</h4>
          <p>{chartData.quantity} files</p>
        </div>
      </div>
      <div className={styles.chartDocumentValueContainer}>
        {chartData.value} GB
      </div>
    </div>
  );
};
