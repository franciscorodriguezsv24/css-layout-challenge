import { EllipsisVertical } from "lucide-react";
import styles from "./card.module.scss";

type CardContent = {
  title: string;
  date: string;
  items: number;
};

type CardProps = {
  cardContent: CardContent;
};

export const Card = ({ cardContent }: CardProps) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.CardHeader}>
        <div className={styles.iconsHeader}>
          <Box />
          <Circles count={cardContent.items} />
        </div>

        <div>
          <EllipsisVertical className={styles.threeDots} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>{cardContent.title}</h3>
        <p>Created: {cardContent.date}</p>
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div className={styles.boxContianer}>
      <div className={styles.boxContent}></div>
    </div>
  );
};

const Circles = ({ count }: { count: number }) => {
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circleConten}>
        {count >= 3 && <div className={styles.circleConten}>+3</div>}
      </div>
    </div>
  );
};
