"use client";

import React from "react";
import styles from "./EditBag.module.scss";
import { useGolfBag } from "@/hooks/golf-bag/getGolfBag";

type EditBagProps = {};

const EditBag: React.FC<EditBagProps> = () => {
  const { golfBag } = useGolfBag();

  return (
    <div className={styles.editBag}>
      <p>Edit Your Golf Bag</p>
      <ul>
        {golfBag.map((club) => (
          <li key={club.name}>
            <div className={styles.club}>
              <div className={styles.type}>
                <p>{club.name}</p>
                <span>{club.loft}°</span>
              </div>
              <div className={styles.yards}>
                <p>{club.avgYardage ?? 0} <span>yds</span></p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditBag;
