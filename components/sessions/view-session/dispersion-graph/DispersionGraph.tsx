"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getSession } from "@/hooks/range-sessions/getSession";
import { useParams } from "next/navigation";
import ShotGraph from "./ShotGraph";
import { useTheme } from "next-themes";
import styles from "./DispersionGraph.module.scss";

type DispersionGraphProps = {};
const DispersionGraph: React.FC<DispersionGraphProps> = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const [sessionData, setSessionData] = useState<any | null>(null);
  const [selectedShotIds, setSelectedShotIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getSession(user?.uid as string, id as string);
      setSessionData(data);
      setLoading(false);
    }
    fetchData();
  }, [user, id]);

  if (loading) {
    return <p>Loading session data...</p>;
  }
  return (
    <div className={styles.dispersionGraphContainer}>
      <div className={styles.chart}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            padding: "1rem",
          }}
        >
          <div className={styles.header}>
            <p className={styles.title}>Shot Dispersion</p>
          </div>
          <ShotGraph shots={sessionData.shots} isDarkMode={isDark} />
        </div>
        <div className={styles.analysis}>
          <p className={styles.title}>Analysis</p>
          <p className={styles.text}>
            Put analysis stuff here, like saying where the user tends to miss
            most, how many online vs offline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DispersionGraph;
