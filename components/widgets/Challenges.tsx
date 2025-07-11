"use client";

import React from "react";
import styles from "./Widget.module.scss";
import Button from "../reusable/button/Button";

type ChallengesProps = {};
const Challenges: React.FC<ChallengesProps> = () => {
  const handleFindChallengeClick = () => {
    console.log("Find Challenge");
  };

  const handleCreateChallengeClick = () => {
    console.log("Create Challenge");
  };

  return (
    <div className={styles.challenges}>
      <div className={styles.startMessage}>
        <h2>Ready for a challenge?</h2>
        <p>Join an existing challenge or create your own.</p>
        <Button
          children={"Find a Challenge"}
          onClick={handleFindChallengeClick}
        />
        <Button
          children={"Create a challenge"}
          onClick={handleCreateChallengeClick}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default Challenges;
