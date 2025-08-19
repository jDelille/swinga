import React from 'react';
import styles from './SessionAverages.module.scss';

type SessionAveragesProps = {
 
 }
const SessionAverages: React.FC<SessionAveragesProps> = () => {
  return (
    <div className={styles.sessionAveragesContainer}>
      <p className={styles.label}>Session Ball & Club Analysis</p>
      <div className={styles.averagesContainer}>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.average}>
            <p>Avg Offline (yd)</p>
            <span>9.6 yds</span>
        </div>
      </div>
    </div>
  );
};

export default SessionAverages;