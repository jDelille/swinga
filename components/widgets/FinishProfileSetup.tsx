import React from "react";
import styles from "./Widget.module.scss";
import { CheckmarkIcon, CheckmarkIconLight } from "@/icons";
import { UserData } from "@/types/userData";

type FinishProfileSetupProps = {
  user: UserData | null;
};
const FinishProfileSetup: React.FC<FinishProfileSetupProps> = ({ user }) => {

  if(!user) return;


  const steps = [
    {
      label: "Verify your account",
      completed: !!user.profileSetup.verified,
    },
    {
      label: "Import a range session",
      completed: !!user.profileSetup.addedSession
    },
    {
      label: "Add your handicap",
      completed: !!user.profileSetup.addedHandicap
    },
    {
      label: "Add your club data",
      completed: !!user.profileSetup.addedClubData
    },
    {
      label: "Add your location",
      completed: !!user.profileSetup.addedLocation
    },
  ];

    const percentComplete = Math.round(
    (steps.filter((s) => s.completed).length / steps.length) * 100
  );


  return (
    <div className={styles.finishProfile}>
      <p>
        Get Started <span>{percentComplete}%</span>
      </p>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${percentComplete}%` }}
        ></div>
      </div>
      <ul>
        {steps.map((step, idx) => (
          <li key={idx}>
            {step.completed ? (
              <CheckmarkIcon size={20} />
            ) : (
              <CheckmarkIconLight size={20} />
            )}
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinishProfileSetup;
