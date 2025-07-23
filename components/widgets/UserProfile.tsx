"use client";

import React from "react";
import styles from "./Widget.module.scss";
import Avatar from "../reusable/avatar/Avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/user/useUser";

type UserProfileProps = {};
const UserProfile: React.FC<UserProfileProps> = () => {
  const { userData, numOfImports, numOfBadges, loading } = useUser({
    includeCounts: true,
  });

  const router = useRouter();

  const user = userData;

  if (!user) return null;

  return (
    <div className={styles.userProfile}>
      <div className={styles.left}>
        <Avatar
          size={90}
          src={user.avatar}
          redirect
          onClick={() => router.push("/profile")}
        />
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
