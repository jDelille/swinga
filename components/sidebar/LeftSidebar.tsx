import React from 'react';
import styles from './Sidebar.module.scss';
import UserProfile from '../widgets/UserProfile';

type LeftSidebarProps = {
 
 }
const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <UserProfile />
    </div>
  );
};

export default LeftSidebar;