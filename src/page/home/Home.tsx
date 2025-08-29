import { History, ChevronRight, Search } from "lucide-react";
import { Card } from "../../components/card/Card";
import { RecentCard } from "../../components/recentCard/RecentCard";
import styles from "./home.module.scss";
import { ShareCard } from "../../components/shareCard/ShareCard";
import { ChartBar } from "../../components/chartBar/ChartBar";
import { cardInfo } from "../../mock/CardInfo";
import { recentCard } from "../../mock/recentCard";
import { shareCard } from "../../mock/sharedCard";

export const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.homeContainer}>
        <section className={styles.sectionContainer}>
          <div className={styles.inputSearchContainer}>
            <label htmlFor="searchStore" className={styles.visuallyHidden}>
              Search
            </label>
            <input
              id="searchStore"
              className={styles.homeInput}
              placeholder="Search"
            />
            <Search className={styles.iconSearch} />
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.recentlyHeader}>
            <h4>Recently Used</h4>
            <div className={styles.recentIconsHeader}>
              <ChevronRight color="#343951" />
              <History color="#9D9FAF" />
            </div>
          </div>
          <div className={styles.cardContainer}>
            {cardInfo.map((card) => {
              return <Card cardContent={card} key={card.id} />;
            })}
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.recentFilesyHeader}>
            <h4>Recently Used</h4>
            <h5>View All</h5>
          </div>
          <div className={styles.cardHeader}>
            <p>Name</p>
            <p>Members</p>
            <p>Last Modified</p>
          </div>
          <div className={styles.recentCardContainer}>
            {recentCard.map((recent) => {
              return <RecentCard recentCard={recent} key={recent.id} />;
            })}
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <div className={styles.recentFilesyHeader}>
            <h4>Share with me</h4>
            <h5>View All</h5>
          </div>
          <div className={styles.shareCardContainer}>
            {shareCard.map((share) => {
              return <ShareCard shareItems={share} key={share.id} />;
            })}
          </div>
        </section>
      </div>
      <ChartBar />
    </div>
  );
};
