import { Outlet } from "react-router";
import styles from "./layout.module.scss";
import { SideBar } from "./components/sidebar/SideBar";
import { NavBar } from "./components/navbar/NavBar";
import { useState } from "react";

function Layout() {
  const [changeLayout, setChangeLayout] = useState<boolean>(false);

  const actionSidebar = () => {
    setChangeLayout(!changeLayout);
  };
  return (
    <div className={styles.container}>
      <SideBar
        changeLayout={changeLayout}
        actionSidebar={actionSidebar}
        setChangeLayout={setChangeLayout}
      />
      <NavBar setChangeLayout={actionSidebar} />
      <section className={styles.mainContent}>
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
