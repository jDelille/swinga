"use client";

import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import Button from "@/components/reusable/button/Button";
import AccountInformation from "./sections/AccountInformation";
import PlayingProfile from "./sections/PlayingProfile";
import { useRouter } from "next/navigation";
import LoginAndSecurity from "./sections/LoginAndSecurity";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { sections } from "@/constants/accountSettings";
import { useUser } from "@/hooks/user/useUser";

type EditProfileProps = {};
const EditProfile: React.FC<EditProfileProps> = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [activeSection, setActiveSection] = useState<string>(
    "Account Information"
  );

  const {userData} = useUser();

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
