"use client";

import React, { useEffect, useState } from "react";
import styles from "./ViewSession.module.scss";
import { getSession } from "@/hooks/range-sessions/getSession";
import Table from "@/components/reusable/table/Table";
import ShotDispersion from "./shot-graph/ShotGraph";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type ViewSessionProps = {};
const ViewSession: React.FC<ViewSessionProps> = () => {
  const { id } = useParams();
  const { user } = useAuth();

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

  const handleSelectShot = (id: string) => {
    setSelectedShotIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.viewSession}>
      {sessionData?.shots?.length ? (
        <>
          <ShotDispersion
            shots={sessionData.shots}
            selectedShotIds={selectedShotIds}
            onSelectShot={handleSelectShot}
          />
          <Table
            shots={sessionData.shots}
            selectedShotIds={selectedShotIds}
            onSelectShot={handleSelectShot}
          />
        </>
      ) : (
        <p>Loading session data...</p>
      )}
    </div>
  );
};

export default ViewSession;
