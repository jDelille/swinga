"use client";

import { auth, db } from "@/firebase/config";
import { UserData } from "@/types/userData";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import getImports from "../range-sessions/getImports";
import getBadgeCount from "../badges/getBadgeCount";

type UseUserOptions = {
  includeCounts?: boolean;
};

export function useUser(options: UseUserOptions = {}) {
  const { includeCounts = true } = options;
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [numOfImports, setNumOfImports] = useState<number | null>(null);
  const [numOfBadges, setNumOfBadges] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setUserData(null);
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setUserData(snap.data() as UserData);
        }

        if (includeCounts) {
          console.log("includes")
          const [imports, badges] = await Promise.all([
            getImports(),
            getBadgeCount(),
          ]);

          setNumOfImports(imports ?? 0);
          setNumOfBadges(badges ?? 0);
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return { user, userData, numOfBadges, numOfImports, loading };
}
