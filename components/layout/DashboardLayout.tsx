"use client";

import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import Footer from "../footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserData } from "@/types/userData";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
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

  if (!user) return;

  return (
    <div className={styles.dashboardLayout}>
      <Navbar user={userData} />
      <div className={styles.pageContent}>
        <LeftSidebar user={userData} />
        <main role="main" aria-label="Page content">
          {children}
        </main>
        <RightSidebar user={userData} />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
