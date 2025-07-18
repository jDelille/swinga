"use client";

import React, { useEffect, useState } from "react";
import styles from "./EditProfile.module.scss";
import Button from "@/components/reusable/button/Button";
import AccountInformation from "./sections/AccountInformation";
import PlayingProfile from "./sections/PlayingProfile";
import { useRouter } from "next/navigation";
import LoginAndSecurity from "./sections/LoginAndSecurity";
import {
  Bell,
  Columns3Cog,
  GlobeLock,
  LandPlot,
  ShieldHalf,
  UserRound,
} from "lucide-react";
import { UserData } from "@/types/userData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

type EditProfileProps = {};
const EditProfile: React.FC<EditProfileProps> = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeSection, setActiveSection] = useState<string>(
    "Account Information"
  );

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

  const sections = [
    {
      name: "Account Information",
      icon: <UserRound size={20} />,
    },
    {
      name: "Playing Profile",
      icon: <LandPlot size={20} />,
    },
    {
      name: "Login & Security",
      icon: <ShieldHalf size={20} />,
    },
    {
      name: "Privacy",
      icon: <GlobeLock size={20} />,
    },
    {
      name: "Notifications",
      icon: <Bell size={20} />,
    },
    {
      name: "Site Preferences",
      icon: <Columns3Cog size={20} />,
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h2 onClick={() => router.push("/")}>SWINGA</h2>
        <Button
          children={"Done"}
          variant="secondary"
          onClick={() => router.push("/profile")}
        />
      </div>
      <div className={styles.editProfile}>
        <aside>
          <h2>Account settings</h2>
          <ul>
            {sections.map((section, index) => (
              <li
                key={index}
                onClick={() => setActiveSection(section.name)}
                className={
                  activeSection === section.name
                    ? styles.active
                    : styles.inactive
                }
              >
                {section.icon}
                {section.name}
              </li>
            ))}
          </ul>
        </aside>
        {activeSection === "Account Information" && (
          <AccountInformation user={userData} userUid={user?.uid} />
        )}
        {activeSection === "Playing Profile" && <PlayingProfile />}
        {activeSection === "Login & Security" && <LoginAndSecurity />}
      </div>
    </>
  );
};

export default EditProfile;
