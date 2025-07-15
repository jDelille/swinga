import React from 'react';
import styles from './UserProfile.module.scss';
import UserOverview from './user-overview/UserOverview';
import UserActivity from './user-activity/UserActivity';

type UserProfileProps = {
 
 }
const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className={styles.userProfile}>
      <UserOverview />
      <UserActivity />
    </div>
  );
};

export default UserProfile;