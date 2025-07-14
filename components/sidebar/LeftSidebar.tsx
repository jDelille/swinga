import React from "react";
import styles from "./Sidebar.module.scss";
import UserProfile from "../widgets/UserProfile";
import LessonPlan from "../widgets/LessonPlan";
import WeekRecap from "../widgets/WeekRecap";
import { UserData } from "@/types/userData";

type LeftSidebarProps = {
  user: UserData | null;
};
const LeftSidebar: React.FC<LeftSidebarProps> = ({ user }) => {
  return (
    <div className={styles.sidebar}>
      <UserProfile user={user} />
      <LessonPlan />
      <WeekRecap />
    </div>
  );
};

export default LeftSidebar;
