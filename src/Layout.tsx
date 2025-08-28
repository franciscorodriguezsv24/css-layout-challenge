import { Outlet } from "react-router";
import styles from "./layout.module.scss";
import { SideBar } from "./components/sidebar/SideBar";
import { ChartBar } from "./components/chartBar/ChartBar";

function Layout() {
  return (
    <div className={styles.container}>
      <SideBar />
      <section className={styles.mainContent}>
        <Outlet />
      </section>
      <ChartBar />
    </div>
  );
}

export default Layout;
