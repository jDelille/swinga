"use client";

import React, { useState } from "react";
import styles from "./BadgeList.module.scss";
import { badges } from "@/badges/badges";
import Badge from "./Badge";
import { usePopupStore } from "@/store/usePopupStore";
import Popup from "../reusable/popup/Popup";
import { Badge as BadgeType } from "@/types/badge";

type BadgeListProps = {};

const BadgeList: React.FC<BadgeListProps> = () => {
  const { popups, openPopup, closePopup } = usePopupStore();

  const [selectedBadge, setSelectedBadge] = useState<BadgeType | null>(null);

  const percentComplete = Math.round((3 / badges.length) * 100);

  const handleBadgeClick = (badge: BadgeType) => {
    setSelectedBadge(badge);
    openPopup("badgePopup");
  };


  const popupBody = selectedBadge ? (
    <div className={styles.badgeBody}>
      <div className={styles.badgeIcon}></div>
      <div className={styles.badgeName}>{selectedBadge.label}</div>
      <div className={styles.badgeDescription}>{selectedBadge.description}</div>
      <div className={styles.sessionId}>{`You earned this badge from session (sessionId)`}</div>
    </div>
  ) : null;

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
      {badges.map((badge, index) => (
        <Badge
          key={badge.id}
          badge={badge}
          onClick={() => handleBadgeClick(badge)}
        />
      ))}

      {/* Popup */}
      <Popup
        isOpen={popups["badgePopup"]}
        onClose={() => closePopup("badgePopup")}
        body={popupBody}
      />
    </div>
  );
};

export default BadgeList;
