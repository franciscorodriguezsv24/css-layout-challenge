import { Frown } from "lucide-react";
import styles from "./notfound.module.scss";
import { useLocation } from "react-router";
export const NotFound = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      We couldn't find this page: <strong> {location.pathname}</strong>
      <div>
        <Frown />
      </div>
    </div>
  );
};
