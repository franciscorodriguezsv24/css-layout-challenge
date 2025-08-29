import { Plus, FileUp, FolderUp, FolderPlus, X, Sun, Moon } from "lucide-react";
import styles from "./sidebar.module.scss";
import { Link, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeModeContext";

import { links } from "../../mock/SidebarMock";

type SidebarProps = {
  changeLayout: boolean;
  setChangeLayout: React.Dispatch<React.SetStateAction<boolean>>;
  actionSidebar: () => void;
};

export const SideBar = ({
  changeLayout,
  setChangeLayout,
  actionSidebar,
}: SidebarProps) => {
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();

  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        actionSidebar();
      }
    }

    if (changeLayout) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [changeLayout, actionSidebar]);

  const isActive = (path: string) => {
    return path === location.pathname;
  };

  return (
    <aside
      ref={sidebarRef}
      className={
        changeLayout ? styles.responsiveContainer : styles.sidebarContainer
      }
    >
      <div className={styles.navigationContainer}>
        <div className={styles.xIconContainer}>
          <button
            className={styles.darkModeButton}
            onClick={() => {
              toggleTheme();
              setChangeLayout(false);
            }}
          >
            {theme == "light" ? <Moon /> : <Sun />}
          </button>
          <X onClick={actionSidebar} className={styles.xIcon} />
        </div>
        <div className={styles.navigationHeader}></div>
        <div className={styles.navigationActions}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                to={link.link}
                className={
                  isActive(link.link) ? styles.active : styles.linkButton
                }
                onClick={() => setChangeLayout(false)}
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
