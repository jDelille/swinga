import React from "react";
import styles from "./StatBox.module.scss";
import { Grip } from "lucide-react";

type StatBoxProps = {
  stat: {
    name: string;
    value: string;
  };
};
const StatBox: React.FC<StatBoxProps> = ({ stat }) => {
  return (
    <div className={styles.statBox}>
      <Grip className={styles.gripIcon} size={16} />
      <h2>{stat.name}</h2>
      <h3>{stat.value}</h3>
    </div>
  );
};

export default StatBox;
