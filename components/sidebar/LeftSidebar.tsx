import React from "react";
import styles from "./Sidebar.module.scss";
import UserProfile from "../widgets/UserProfile";
import WeekRecap from "../widgets/WeekRecap";
import LessonPlan from "../widgets/lesson-plan/LessonPlan";

type LeftSidebarProps = {};
const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <UserProfile />
      <LessonPlan />
      <WeekRecap />
    </div>
  );
};

export default LeftSidebar;
