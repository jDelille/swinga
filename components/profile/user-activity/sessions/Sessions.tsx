"use client";

import React, { useEffect, useState } from "react";
import styles from "./Sessions.module.scss";
import { useAuth } from "@/context/AuthContext";
import { RangeSession } from "@/types/rangeSession";
import { getSessions } from "@/hooks/range-sessions/getSessions";
import Session from "./Session";

type SessionsProps = {};

const Sessions: React.FC<SessionsProps> = () => {
  const { user } = useAuth();

  const [sessions, setSessions] = useState<RangeSession[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getSessions(user?.uid as string);
      setSessions(data);
      setLoading(false);
    }
    fetchData();
  }, [user]);

  console.log(sessions)

  return (
    <div className={styles.sessionsContainer}>
        {sessions.map((session, index) => (
            <Session session={session} index={index + 1} key={index} />
        ))}
    </div>
  )
};

export default Sessions;
