"use client";

import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import EditProfile from "../profile/edit-profile/EditProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserData } from "@/types/userData";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

type SettingsLayoutProps = {
  children: React.ReactNode;
};

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setUserData(snap.data() as UserData);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className={styles.settingsLayout}>
      <EditProfile user={userData} userUid={user?.uid}/>
    </div>
  );
};

export default SettingsLayout;
