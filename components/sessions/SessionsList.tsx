"use client";

import React, { useEffect, useState } from "react";
import styles from "./Sessions.module.scss";
import { useAuth } from "@/context/AuthContext";
import { RangeSession } from "@/types/rangeSession";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import Session from "./Session";

type SessionsProps = {};

const SessionsList: React.FC<SessionsProps> = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<RangeSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function fetchSessions() {
      if (!user) return;

      try {
        const q = query(
          collection(db, "users", user.uid, "rangeSessions"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        const sessionsData = await Promise.all(
          querySnapshot.docs.map(async (sessionDoc) => {
            const sessionId = sessionDoc.id;
            const sessionData = sessionDoc.data();

            const shotsRef = collection(
              db,
              "users",
              user.uid,
              "rangeSessions",
              sessionId,
              "shots"
            );
            const shotsSnapshot = await getDocs(shotsRef);
            const shots = shotsSnapshot.docs.map((shotDoc) => ({
              id: shotDoc.id,
              ...shotDoc.data(),
            }));

            return {
              id: sessionId,
              ...sessionData,
              shots,
            };
          })
        );

        setSessions(sessionsData);
      } catch (error) {
        console.error("Error fetching sessions and shots:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSessions();
  }, [user]);

  console.log(sessions)

  return (
    <div className={styles.sessions}>
      <h2>Sessions</h2>
      {sessions.map((session) => (
        <Session session={session} key={session.id}/>
      ))}
    </div>
  );
};

export default SessionsList;
