"use client";

import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import Button from "@/components/reusable/button/Button";
import AccountInformation from "./sections/AccountInformation";
import PlayingProfile from "./sections/PlayingProfile";
import { useRouter } from "next/navigation";
import LoginAndSecurity from "./sections/LoginAndSecurity";

type EditProfileProps = {};
const EditProfile: React.FC<EditProfileProps> = () => {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("Account Information");

  const sections = [
    "Account Information",
    "Playing Profile",
    "Login & Security",
    "Privacy",
    "Notifications",
    "Site Preferences",
  ];

  return (
    <>
      <div className={styles.header}>
        <h2 onClick={() => router.push('/')}>SWINGA</h2>
        <Button children={"Done"} variant="secondary" />
      </div>
      <div className={styles.editProfile}>
        <aside>
          <h2>Account settings</h2>
          <ul>
            {sections.map((section, index) => (
              <li key={index} onClick={() => setActiveSection(section)}>
                {section}
              </li>
            ))}
          </ul>
        </aside>
        {activeSection === "Account Information" && <AccountInformation />}
        {activeSection === "Playing Profile" && <PlayingProfile />}
        {activeSection === "Login & Security" && <LoginAndSecurity />}
      </div>
    </>
  );
};

export default EditProfile;
