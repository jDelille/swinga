"use client";

import React from "react";
import styles from "./UserOverview.module.scss";
import Avatar from "@/components/reusable/avatar/Avatar";
import { formatDateMedium } from "@/hooks/format-date/formatDateMedium";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/store/useModalStore";
import { Pencil } from "lucide-react";
import { useUser } from "@/hooks/user/useUser";

type UserOverviewProps = {};
const UserOverview: React.FC<UserOverviewProps> = () => {
  const router = useRouter();

  const { openModal } = useModalStore();

  const { userData, numOfImports, numOfBadges, loading } = useUser({
    includeCounts: true,
  });

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
