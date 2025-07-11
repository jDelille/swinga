import React from "react";
import styles from "./Sidebar.module.scss";
import Notifications from "../widgets/Notifications";
import FinishProfileSetup from "../widgets/FinishProfileSetup";
import Challenges from "../widgets/Challenges";

type RightSidebarProps = {};
const RightSidebar: React.FC<RightSidebarProps> = () => {
  return (
    <div className={styles.rightSidebar}>
      <Notifications />
      <FinishProfileSetup />
      <Challenges />
    </div>
  );
};

export default RightSidebar;
