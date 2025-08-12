"use client";

import React, { useEffect, useState } from "react";
import styles from "./UserStats.module.scss";
import { Grid2x2Plus } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import Modal from "@/components/reusable/modal/Modal";
import stats from "@/constants/userStats"; // string[]
import { mapFirestoreToStats, Stat } from "@/constants/userStats"; // map function & type
import DraggableStats from "./draggable-stats/DraggableStats";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

type UserStatsProps = {};

const MAX_STATS = 6;

const UserStats: React.FC<UserStatsProps> = () => {
  const { modals, openModal, closeModal } = useModalStore();
  const [firestoreStats, setFirestoreStats] = useState<Stat[]>([]);
  const [selectedStats, setSelectedStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const fetchStats = async () => {
      const uid = auth.currentUser!.uid;
      const statsDoc = doc(db, "users", uid, "averages", "general");
      const snapshot = await getDoc(statsDoc);
      if (snapshot.exists()) {
        const data = snapshot.data();
        
        const mappedStats = mapFirestoreToStats(data);
        setFirestoreStats(mappedStats);
        // Initialize selectedStats with first 4 firestore stats (or empty)
        setSelectedStats(mappedStats.slice(0, 6));
      } else {
        setFirestoreStats([]);
        setSelectedStats([]);
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  console.log(firestoreStats)

  const toggleStat = (statName: string) => {
    setSelectedStats((prev) => {
      const alreadySelected = prev.find((s) => s.name === statName);
      if (alreadySelected) {
        // Remove it
        return prev.filter((s) => s.name !== statName);
      } else if (prev.length < MAX_STATS) {
        // Add new stat with value from firestoreStats or default "N/A"
        const firestoreStat = firestoreStats.find((s) => s.name === statName);
        return [
          ...prev,
          firestoreStat || { name: statName, value: "N/A" },
        ];
      } else {
        return prev; // max reached, no change
      }
    });
  };

  const addMoreStatsBody = (
    <div className={styles.modalBody}>
      {stats.map((statName) => {
        const isSelected = selectedStats.some((s) => s.name === statName);
        const isDisabled = !isSelected && selectedStats.length >= MAX_STATS;

        return (
          <div
            key={statName}
            className={`${isSelected ? styles.selected : styles.notSelected} ${
              isDisabled ? styles.disabled : ""
            }`}
            onClick={() => !isDisabled && toggleStat(statName)}
          >
            <p>{statName}</p>
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
        <h2>{selectedStats.length === MAX_STATS ? "Edit stats" : "Add more stats"}</h2>
        <Grid2x2Plus size={15} strokeWidth={2} />
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