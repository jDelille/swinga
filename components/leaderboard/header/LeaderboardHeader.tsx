"use client";

import React, { useEffect, useState } from "react";
import styles from "./LeaderboardHeader.module.scss";
import { Clock } from "lucide-react";

type LeaderboardHeaderProps = {};
const LeaderboardHeader: React.FC<LeaderboardHeaderProps> = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const getEndOfMonth = () => {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);
    };

    const updateCountdown = () => {
      const now = new Date();
      const endOfMonth = getEndOfMonth().getTime();
      const diff = endOfMonth - now.getTime();

      if (diff <= 0) {
        setTimeLeft("0d 0h 0m 0s");
        return;
      }

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    updateCountdown(); 
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.leaderboardHeader}>
      <h2>Monthly Leaderboard</h2>
      <div className={styles.reset}><Clock size={14} strokeWidth={2} /> Reset in: {timeLeft}</div>
    </div>
  );
};

export default LeaderboardHeader;
