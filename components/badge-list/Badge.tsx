"use client";

import React from "react";
import styles from "./BadgeList.module.scss";
import { Badge as BadgeType } from "@/types/badge";

type BadgeProps = {
  badge: BadgeType;
  onClick: () => void;
};
const Badge: React.FC<BadgeProps> = ({ badge, onClick }) => {
    
  return (
    <div className={styles.badge} onClick={onClick}>
      <div className={styles.icon}>
        <img src={badge.icon} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{badge.label}</h2>
        <p>{badge.description}</p>
      </div>
    </div>
  );
};

export default Badge;
