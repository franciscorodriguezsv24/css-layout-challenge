import {
  Plus,
  FileUp,
  FolderUp,
  FolderPlus,
  Home,
  Files,
  FileClock,
  SquareArrowOutUpRight,
  CircleFadingArrowUp,
  Trash,
} from "lucide-react";
import styles from "./sidebar.module.scss";
import { Link } from "react-router";

type LinksData = {
  link: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export const SideBar = () => {
  const links: LinksData[] = [
    { link: "/", label: "Home", icon: Home },
    { link: "#", label: "My Files", icon: Files },
    { link: "#", label: "Recent Files", icon: FileClock },
    { link: "#", label: "Shared Filed", icon: SquareArrowOutUpRight },
    { link: "#", label: "File Request", icon: CircleFadingArrowUp },
    { link: "#", label: "Trash", icon: Trash },
  ];

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationHeader}></div>
        <div className={styles.navigationActions}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                to={link.link}
                className={styles.linkButton}
              >
                <Icon size={13} /> {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.actionElements}>
          <div className={styles.elementsContainer}>
            <button>
              {" "}
              <FileUp size={13} /> Upload files{" "}
            </button>
            <button>
              {" "}
              <FolderUp size={13} /> Upload folder{" "}
            </button>
            <button>
              <FolderPlus size={13} /> New folder{" "}
            </button>
            <button>
              {" "}
              <Plus size={13} /> More{" "}
            </button>
          </div>
        </div>
        <button className={styles.buttonNew}>
          Create New
          <Plus className={styles.buttonIcon} />
        </button>
      </div>
    </aside>
  );
};
