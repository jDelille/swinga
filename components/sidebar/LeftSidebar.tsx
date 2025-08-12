import React from "react";
import styles from "./Sidebar.module.scss";
import UserProfile from "../widgets/UserProfile";
import WeekRecap from "../widgets/WeekRecap";

type LeftSidebarProps = {};
const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <UserProfile />
      <WeekRecap />
    </div>
  );
};

export default LeftSidebar;
