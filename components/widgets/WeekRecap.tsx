import React from 'react';
import styles from './Widget.module.scss';
import Button from '../reusable/button/Button';

type WeekRecapProps = {
 
 }
const WeekRecap: React.FC<WeekRecapProps> = () => {
  return (
    <div className={styles.weekRecap}>
       <div className={styles.startMessage}>
        <h2>Last 7 Days</h2>
        <p>
          Import data regularly to get a report of your last seven days.
        </p>
        <Button>
          Import Data
        </Button>
        
      </div>
    </div>
  );
};

export default WeekRecap;