import styles from "./sharecard.module.scss";
import { type LucideProps } from "lucide-react";

type ShareItemsContent = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  date: string;
  category: number;
};

type ShareitemsProps = {
  shareItems: ShareItemsContent;
};

export const ShareCard = ({ shareItems }: ShareitemsProps) => {
  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareIcons}>
        <shareItems.icon color="#ff9f00" />
        <Circles category={shareItems.category} />
      </div>
      <div className={styles.shareText}>
        <h4>{shareItems.title}</h4>
        <p>Created: {shareItems.date}</p>
      </div>
    </div>
  );
};

const Circles = ({ category }: { category: number }) => {
  const renderCircles = () => {
    switch (category) {
      case 1:
        return (
          <div className={styles.circleGreen}>
            <div className={styles.circleRed}></div>
          </div>
        );
      case 2:
        return (
          <div className={styles.circleGreen}>
            <div className={styles.circleOrange}></div>
          </div>
        );
      case 3:
        return (
          <div className={styles.circleGreen}>
            <div className={styles.circleRed}>
              <div className={styles.circleOrange}></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className={styles.circlesContainer}>{renderCircles()}</div>;
};
