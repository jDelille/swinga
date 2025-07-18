"use client";

import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { UserData } from "@/types/userData";
import { doc, getDoc } from "firebase/firestore";

type SinglePageLayoutProps = {
  children: React.ReactNode;
  isAuth?: boolean;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({
  children,
  isAuth,
}) => {
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
