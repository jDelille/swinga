"use client";

import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useUser } from "@/hooks/user/useUser";

type SinglePageLayoutProps = {
  children: React.ReactNode;
  isAuth?: boolean;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({
  children,
  isAuth,
}) => {
  const [user] = useAuthState(auth);
  const { userData } = useUser();

  if (!user) return;

  return (
    <div className={styles.singlePageLayout}>
      <Navbar isAuth={isAuth} user={userData} />
      <div className={styles.pageContent}>
        <main role="main" aria-label="Page content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePageLayout;
