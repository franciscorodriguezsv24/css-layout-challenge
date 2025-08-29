import React, { useEffect, useRef } from "react";
import drawChart from "./DrawChart";
import styles from "./chartComponent.module.scss";

type DataItems = {
  name: string;
  quantity: number;
  value: number;
  color: string;
};

type DataProps = {
  data: DataItems[];
};

const DonutChart = ({ data }: DataProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div className={styles.container}>
      <div className={styles.graph} ref={ref} />
      <div className={styles.textInsideChart}>
        <h4>85%</h4>
        <p>Used</p>
      </div>
    </div>
  );
};

export default React.memo(DonutChart);
