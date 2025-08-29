import profile from "../../assets/profile.jpg";

import styles from "./navbar.module.scss";
import { Menu, Settings, UserPen } from "lucide-react";

type navbarProps = {
  setChangeLayout: () => void;
};

export const NavBar = ({ setChangeLayout }: navbarProps) => {
  return (
    <div className={styles.chartHeaderContainer}>
      <Menu onClick={setChangeLayout} />
      <div className={styles.chartContainerMenu}>
        <div className={styles.chartIconContainer}>
          <Settings size={20} />
          <UserPen size={20} />
        </div>
        <div className={styles.imgContainer}>
          <img src={profile} className={styles.imgSidebar} alt="profile" />
        </div>
      </div>
    </div>
  );
};
