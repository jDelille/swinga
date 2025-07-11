import React from "react";
import styles from "./Widget.module.scss";

type FinishProfileSetupProps = {};
const FinishProfileSetup: React.FC<FinishProfileSetupProps> = () => {
  return (
    <div className={styles.finishProfile}>
      <p>Finish setting up your profile</p>
      <ul>
        <li>Add a profile picture</li>
        <li>Add your handicap</li>
        <li>Add your club data</li>
        <li>Add your location</li>
      </ul>
    </div>
  );
};

export default FinishProfileSetup;
