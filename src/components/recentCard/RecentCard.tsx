import { Ellipsis, type LucideProps } from "lucide-react";
import styles from "./recentcard.module.scss";

type RecentCardcontent = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconColor: string;
  title: string;
  members: string;
  date: string;
};

type recentCardProp = {
  recentCard: RecentCardcontent;
};

export const RecentCard = ({ recentCard }: recentCardProp) => {
  return (
    <div className={styles.recentContainer}>
      <div className={styles.iconTitleContainer}>
        <recentCard.icon color={recentCard.iconColor} />
        <h4>{recentCard.title}</h4>
      </div>
      <p>{recentCard.members}</p>
      <p>{recentCard.date}</p>

      <div className={styles.iconContainer}>
        <Ellipsis className={styles.threeDots} />
      </div>
    </div>
  );
};
