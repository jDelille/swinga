"use client";

import React, { useEffect, useState } from "react";
import styles from "./Widget.module.scss";
import Avatar from "../reusable/avatar/Avatar";
import Link from "next/link";
import { UserData } from "@/types/userData";
import getImports from "@/hooks/range-sessions/getImports";
import getBadgeCount from "@/hooks/badges/getBadgeCount";
import { useRouter } from "next/navigation";

type UserProfileProps = {
  user: UserData | null;
};
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [numOfImports, setNumOfImports] = useState<number | null>(null);
  const [numOfBadges, setNumOfBadges] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCounts = async () => {
      const importCount = await getImports();
      setNumOfImports(importCount ?? 0);
      const badgeCount = await getBadgeCount();
      setNumOfBadges(badgeCount ?? 0);
    };
    fetchCounts();
  }, []);

  if (!user) return null;

  return (
    <div className={styles.userProfile}>
      <div className={styles.left}>
        <Avatar size={90} src={user.avatar} />
        <Link href={"/profile"}>{user.name}</Link>
        <p>{user.level}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.row} onClick={() => router.push("/sessions")}>
          <h2>{numOfImports}</h2>
          <p>{numOfImports && numOfImports > 1 ? "Imports" : "Import"}</p>
        </div>
        <div className={styles.row} onClick={() => router.push("/badges")}>
          <h2>{numOfBadges}</h2>
          <p>{numOfBadges && numOfBadges > 1 ? "Badges" : "Badge"}</p>
        </div>
        <div className={styles.row}>
          <h3>0</h3>
          <p>Connections</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
