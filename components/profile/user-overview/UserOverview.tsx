"use client";

import React, { useEffect, useState } from "react";
import styles from "./UserOverview.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { UserData } from "@/types/userData";
import { doc, getDoc } from "firebase/firestore";
import Avatar from "@/components/reusable/avatar/Avatar";
import { formatDateMedium } from "@/hooks/format-date/formatDateMedium";
import { EditIcon } from "@/icons";
import getImports from "@/hooks/range-sessions/getImports";
import getBadgeCount from "@/hooks/badges/getBadgeCount";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/store/useModalStore";
import { Pencil } from "lucide-react";

type UserOverviewProps = {};
const UserOverview: React.FC<UserOverviewProps> = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const { modals, openModal, closeModal } = useModalStore();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [numOfImports, setNumOfImports] = useState<number | null>(null);
  const [numOfBadges, setNumOfBadges] = useState<number | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setUserData(snap.data() as UserData);
      }
      const importCount = await getImports();
      setNumOfImports(importCount ?? 0);
      const badgeCount = await getBadgeCount();
      setNumOfBadges(badgeCount ?? 0);
    };

    fetchUserData();
  }, [user]);

  if (!userData) return;

  return (
    <div className={styles.userOverview}>
      <div className={styles.avatarContainer}>
        <Avatar size={80} src={userData.avatar} />
        <Pencil 
          size={20}
          color="gray"
          onClick={() => router.push("/profile/edit")}
        />
      </div>
      <div className={styles.text}>
        <h2>{userData.name}</h2>
        <h3>{userData.location}</h3>
        <p>Member since {formatDateMedium(userData.createdAt)}</p>

        <p className={styles.bio}>{userData.bio}</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.column}>
          <p className={styles.value}>{numOfImports}</p>
          <p>Imports</p>
        </div>
        <div className={styles.column}>
          <p className={styles.value}>{numOfBadges}</p>
          <p>Badges</p>
        </div>
        <div className={styles.column}>
          <p className={styles.value}>0</p>
          <p>Connections</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button>Stats</button>
        <button onClick={() => openModal("golfBag")}>Golf Bag</button>
      </div>
    </div>
  );
};

export default UserOverview;
