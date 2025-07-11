import React from 'react';
import styles from './GettingStarted.module.scss';

type GettingStartedProps = {
 
 }
const GettingStarted: React.FC<GettingStartedProps> = () => {
  return (
    <div className={styles.gettingStarted}>
      <div className={styles.title}>
        <h2>Ready to Tee Off?</h2>
        <p>Here are a few steps to help you start swinging with Swinga.</p>
      </div>
    </div>
  );
};

export default GettingStarted;