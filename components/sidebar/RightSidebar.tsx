import React from "react";
import styles from "./Sidebar.module.scss";
import Notifications from "../widgets/Notifications";
import FinishProfileSetup from "../widgets/FinishProfileSetup";
import Challenges from "../widgets/Challenges";
import { UserData } from "@/types/userData";

type RightSidebarProps = {
    user: UserData | null;
  
};
const RightSidebar: React.FC<RightSidebarProps> = ({user}) => {
  return (
    <div className={styles.rightSidebar}>
      {/* <Notifications /> */}
      <FinishProfileSetup user={user}/>
      <Challenges />
    </div>
  );
};

export default RightSidebar;
