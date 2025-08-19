"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "@/hooks/range-sessions/getSession";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import SessionAverages from "./session-averages/SessionAverages";
import AveragesBarChart from "./averages-bar-chart/AveragesBarChart";
import DispersionGraph from "./dispersion-graph/DispersionGraph";
import Table from "./table/Table";

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
    <div>
      <SessionAverages />
      <AveragesBarChart />
      <Table shots={sessionData.shots} />
      <DispersionGraph />
    </div>
  );
};

export default ViewSession;
