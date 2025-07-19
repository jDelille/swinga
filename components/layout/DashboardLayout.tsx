"use client";

import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import Footer from "../footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

import { useUser } from "@/hooks/user/useUser";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [user] = useAuthState(auth);
  const { userData } = useUser();

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
