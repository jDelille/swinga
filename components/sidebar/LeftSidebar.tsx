import React from 'react';
import styles from './Sidebar.module.scss';
import UserProfile from '../widgets/UserProfile';
import LessonPlan from '../widgets/LessonPlan';
import Challenges from '../widgets/Challenges';

type LeftSidebarProps = {
 
 }
const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <UserProfile />
      <LessonPlan />
      <Challenges />
    </div>
  );
};

export default LeftSidebar;