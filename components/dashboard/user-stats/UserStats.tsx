"use client";

import React, { useState } from "react";
import styles from "./UserStats.module.scss";
import StatBox from "./stat-box/StatBox";
import { Grid2x2Plus } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import Modal from "@/components/modal/Modal";

type UserStatsProps = {};

const stats = [
  { name: "Avg Offline (yd)", value: "12.3 yds" },
  { name: "Miss Tendency", value: "67% Right" },
  { name: "Consistency", value: "8.7 yds" },
  { name: "Shots Tracked", value: "287" },
  { name: "Smash Factor", value: "1.48" },
  { name: "Ball Speed (mph)", value: "130" },
  { name: "Carry Distance (yd)", value: "180" },
  { name: "Total Distance (yd)", value: "195" },
  { name: "Launch Angle (°)", value: "13.5" },
  { name: "Attack Angle (°)", value: "-2.5" },
  { name: "Back Spin (rpm)", value: "3200" },
  { name: "Side Spin (rpm)", value: "200" },
  { name: "Face Angle (°)", value: "-1.8" },
  { name: "Club Path (°)", value: "0.5" },
  { name: "Launch Direction (°)", value: "1.2" },
  { name: "Spin Rate (rpm)", value: "3400" },
  { name: "Spin Axis (°)", value: "-3.0" },
  { name: "Landing Angle (°)", value: "42" },
  { name: "Dynamic Loft (°)", value: "18.5" },
  { name: "Apex Height (yd)", value: "45" },
  { name: "Shot Height (yd)", value: "44" },
  { name: "Face to Path (°)", value: "-2.3" },
  { name: "Shot Dispersion (yd)", value: "7.5" },
  { name: "Shot Shape Bias", value: "60% Draw" },
];

const UserStats: React.FC<UserStatsProps> = () => {
  const { modals, openModal, closeModal } = useModalStore();
  const [selectedStats, setSelectedStats] = useState<
    { name: string; value: string }[]
  >(stats.slice(0, 4));

  const MAX_STATS = 6;

  const toggleStat = (stat: { name: string; value: string }) => {
    setSelectedStats((prev) => {
      const alreadySelected = prev.find((s) => s.name === stat.name);
      if (alreadySelected) {
        return prev.filter((s) => s.name !== stat.name);
      } else if (prev.length < MAX_STATS) {
        return [...prev, stat];
      } else {
        // optionally show a toast or warning
        return prev;
      }
    });
  };

  const addMoreStatsBody = (
        <div className={styles.modalBody}>
      {stats.map((stat) => {
        const isSelected = selectedStats.find((s) => s.name === stat.name);
        const isDisabled = !isSelected && selectedStats.length >= MAX_STATS;

        return (
          <div
            key={stat.name}
            className={`${isSelected ? styles.selected : styles.notSelected} ${
              isDisabled ? styles.disabled : ""
            }`}
            onClick={() => !isDisabled && toggleStat(stat)}
          >
            <p>{stat.name}</p>
          </div>
        );
      })}
    </div>

  );

  return (
    <div className={styles.userStatsContainer}>
      {selectedStats.map((stat) => (
        <StatBox stat={stat} />
      ))}

      <div className={styles.addMore} onClick={() => openModal("addMoreStats")}>
        <h2>{selectedStats.length === 6 ? "Edit stats" : "Add more stats"}</h2>
        <Grid2x2Plus size={16} />
      </div>

      <Modal
        isOpen={modals["addMoreStats"]}
        title={"Edit Stats"}
        onClose={() => closeModal("addMoreStats")}
        body={addMoreStatsBody}
        description="Personalize your home page by choosing which stats you want to see. You can only have 6 stats active at a time."
        buttonText="Save"
        onClick={() => closeModal("addMoreStats")}
      />
    </div>
  );
};

export default UserStats;
