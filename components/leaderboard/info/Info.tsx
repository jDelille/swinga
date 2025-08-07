import React from "react";
import styles from "./Info.module.scss";

type InfoProps = {};
const Info: React.FC<InfoProps> = () => {
  return (
    <div className={styles.infoContainer}>
      <h2>Your current rank is: #42</h2>
      <p>Upload Sessions, Earn Badges, Set Records</p>
      <span>
        Earn points all month long — every session you upload gets you closer.
        Better stats, more points. Track your progress live and rise through the
        ranks. Prizes awarded monthly.
      </span>
    </div>
  );
};

export default Info;
