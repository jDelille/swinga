import React from "react";
import styles from "./BadgeList.module.scss";
import { badges } from "@/badges/badges";
import Badge from "./Badge";

type BadgeListProps = {};

const BadgeList: React.FC<BadgeListProps> = () => {
  console.log(badges);

  const percentComplete = Math.round((3 / badges.length) * 100);

  return (
    <div className={styles.badgeListContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Badges</h2>
        <p className={styles.earned}>
          3 of {badges.length} badges earned <span>{percentComplete}%</span>{" "}
        </p>
        <div className={styles.badgeProgressBar}>
          <div
            className={styles.progress}
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
      </div>
      {badges.map((badge) => (
        <Badge key={badge.id} badge={badge} />
      ))}
    </div>
  );
};

export default BadgeList;
