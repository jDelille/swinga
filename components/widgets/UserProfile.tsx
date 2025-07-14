"use client";

import React, { useEffect, useState } from "react";
import styles from "./Widget.module.scss";
import Avatar from "../reusable/avatar/Avatar";
import Link from "next/link";
import { UserData } from "@/types/userData";
import getImports from "@/hooks/range-sessions/getImports";

type UserProfileProps = {
  user: UserData | null;
};
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [numOfImports, setNumOfImports] = useState<number | null>(null);

  useEffect(() => {
    const fetchImports = async () => {
      const count = await getImports();
      setNumOfImports(count ?? 0);
    };
    fetchImports();
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
        <div className={styles.row}>
          <h2>{numOfImports}</h2>
          <p>{numOfImports && numOfImports > 1 ? "Imports" : "Import"}</p>
        </div>
        <div className={styles.row}>
          <h2>4</h2>
          <p>Badges</p>
        </div>
        <div className={styles.row}>
          <h3>3</h3>
          <p>Connections</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
