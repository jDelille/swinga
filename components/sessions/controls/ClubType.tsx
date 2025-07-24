import React, { MouseEventHandler } from "react";
import styles from "./SessionListControls.module.scss";

type ClubTypeProps = {
  onClick: (club: string) => void;
  activeFilter: string;
  club: string;
};
const ClubType: React.FC<ClubTypeProps> = ({ onClick, activeFilter, club }) => {
  return (
    <div
      className={activeFilter === club ? styles.active : styles.inactive}
      onClick={() => onClick(club)}
    >
      {club}
    </div>
  );
};

export default ClubType;
