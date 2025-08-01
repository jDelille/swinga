"use client";

import React from "react";
import styles from "./UserProfile.module.scss";
import UserOverview from "./user-overview/UserOverview";
import UserActivity from "./user-activity/UserActivity";
import { useModalStore } from "@/store/useModalStore";
import Modal from "../modal/Modal";
import { useGolfBag } from "@/hooks/golf-bag/getGolfBag";
import {SquarePen} from 'lucide-react';
import Button from "../reusable/button/Button";

type UserProfileProps = {};
const UserProfile: React.FC<UserProfileProps> = () => {
  const { modals, openModal, closeModal } = useModalStore();
  const { golfBag } = useGolfBag();

  const golfBagBody = (
    <div className={styles.golfBag}>
      <ul>
        {golfBag.map((club) => (
          <li className={styles.club}>
            <div>
              <SquarePen size={15} cursor={"pointer"}/>
            </div>
            <div className={styles.name}>
              <p>{club.name}</p>
              <span>{club.loft}°</span>
            </div>
            <div className={styles.yards}>
              {club.avgYardage ?? 0} yards
            </div>
          </li>
        ))}
      </ul>
    </div>
  );


  return (
    <div className={styles.userProfile}>
      <UserOverview />
      {/* <UserActivity /> */}
      <Modal
        isOpen={modals["golfBag"]}
        title={"Your Golf Bag"}
        onClose={() => closeModal("golfBag")}
        body={golfBagBody}
        description="View and edit your golf bag."
        buttonText=""
        onClick={() => console.log("nothing")}
      />
    </div>
  );
};

export default UserProfile;
