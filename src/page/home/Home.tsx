import {
  Camera,
  Plane,
  LayoutDashboard,
  Trash,
  Proportions,
  SquarePen,
  FileText,
  History,
  ChevronRight,
  Search,
} from "lucide-react";
import { Card } from "../../components/card/Card";
import { RecentCard } from "../../components/recentCard/RecentCard";
import styles from "./home.module.scss";
import { ShareCard } from "../../components/shareCard/ShareCard";

export const Home = () => {
  const cardInfo = [
    {
      id: 1,
      title: "App Project",
      date: "20.02.2020",
      items: 2,
    },
    {
      id: 2,
      title: "Project: fitbit",
      date: "28.02.2020",
      items: 2,
    },
    {
      id: 3,
      title: "Client Documents",
      date: "4.03.2020",
      items: 3,
    },
  ];

  const recentCard = [
    {
      id: 1,
      icon: Plane,
      iconColor: "#ffb233",
      title: "Travel Landing Page",
      members: "5 members",
      date: "Mar 8, 2020",
    },
    {
      id: 2,
      icon: Camera,
      iconColor: "#4ac29d",
      title: "True Photos",
      members: "12 members",
      date: "Mar 8, 2020",
    },
    {
      id: 3,
      icon: LayoutDashboard,
      iconColor: "#ff6860",
      title: "Dashboard Structure",
      members: "10 members",
      date: "Mar 9, 2020",
    },
    {
      id: 4,
      icon: Trash,
      iconColor: "#ffb233",
      title: "Character Illustration",
      members: "3 members",
      date: "Mar 10, 2020",
    },
  ];

  const shareCard = [
    {
      id: 1,
      icon: Proportions,
      title: "Landing Page",
      date: "20.02.2020",
      category: 1,
    },
    {
      id: 2,
      icon: SquarePen,
      title: "Ilustration Pack",
      date: "20.02.2020",
      category: 3,
    },
    {
      id: 3,
      icon: FileText,
      title: "CV Design",
      date: "20.02.2020",
      category: 2,
    },
  ];
  return (
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
  );
};
