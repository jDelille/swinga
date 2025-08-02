"use client";

import React, { useState } from "react";
import styles from "./UserStats.module.scss";
import StatBox from "./stat-box/StatBox";
import { Grid2x2Plus } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import Modal from "@/components/modal/Modal";
import stats from "@/constants/userStats";
import DraggableStats from "./draggable-stats/DraggableStats";

type UserStatsProps = {};

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
      <DraggableStats
        selectedStats={selectedStats}
        setSelectedStats={setSelectedStats}
      />
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
