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
      <div></div>
      <div>
        <h2>{cardContent.title}</h2>
        <p>Created: {cardContent.date}</p>
      </div>
    </div>
  );
};
