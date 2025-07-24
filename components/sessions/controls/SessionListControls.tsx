"use client";
import React, { useState } from "react";
import styles from "./SessionListControls.module.scss";
import Link from "next/link";
import ClubType from "./ClubType";
import SearchInput from "./SearchInput";

type SessionListControlsProps = {};
const SessionListControls: React.FC<SessionListControlsProps> = () => {

  const [activeFilter, setActiveFilter] = useState("All")

  const clubs = [
   "All",
   "Irons",
   "Wedges",
   "Woods",
   "Driver",
   "Putter",
   "Favorites"
  ]

  const handleClubClick = (club: string) => {
    setActiveFilter(club)
  }

  return (
    <div className={styles.sessionListControls}>
      <div className={styles.top}>
        <div className={styles.controls}>
          <p>+ Manual Activity</p>
          <Link href={"/upload"}>Upload</Link>
          <p>Export CSV</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <SearchInput />
      <div className={styles.compare}>
        Compare 0 of 4
      </div>
      <div className={styles.clubType}>
        {clubs.map((club) => (
          <ClubType club={club} onClick={handleClubClick} activeFilter={activeFilter}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SessionListControls;
