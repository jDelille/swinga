import React from "react";
import styles from "./Top3.module.scss";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

type Top3Props = {};
const Top3: React.FC<Top3Props> = () => {
  return (
    <div className={styles.top3}>
      <div className={styles.box}>
        <div className={styles.user}>
          <div className={styles.picture}></div>
          <span className={styles.name}>Name</span>
          <span className={styles.position}>2nd</span>
        </div>
        <div className={styles.silver}></div>
        <div className={styles.silverPoints}>
          <EmojiEventsIcon fontSize="small" className={styles.silverTrophy} />
          <span>1300</span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.user}>
          <div className={styles.picture}></div>
          <span className={styles.name}>Name</span>
          <span className={styles.position}>1st</span>
        </div>
        <div className={styles.gold}></div>
        <div className={styles.goldPoints}>
          <EmojiEventsIcon fontSize="small" className={styles.goldTrophy} />
          <span>2300</span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.user}>
          <div className={styles.picture}></div>
          <span className={styles.name}>Name</span>
          <span className={styles.position}>3rd</span>
        </div>
        <div className={styles.bronze}></div>
        <div className={styles.bronzePoints}>
          <EmojiEventsIcon fontSize="small" className={styles.bronzeTrophy} />
          <span>870</span>
        </div>
      </div>
    </div>
  );
};

export default Top3;
