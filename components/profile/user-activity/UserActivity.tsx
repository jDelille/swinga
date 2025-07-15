import React from 'react';
import styles from './UserActivity.module.scss';

type UserActivityProps = {
 
 }
const UserActivity: React.FC<UserActivityProps> = () => {
  return (
    <div className={styles.userActivity}>
      <div className={styles.header}>
        <ul>
            <li>Feed</li>
            <li>Sessions</li>
            <li>Challenges</li>
            <li>Badges</li>
            <li>Stats</li>
        </ul>
      </div>
    </div>
  );
};

export default UserActivity;