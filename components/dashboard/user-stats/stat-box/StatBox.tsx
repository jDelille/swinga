import React from "react";
import styles from "./StatBox.module.scss";
import { Grip } from "lucide-react";

type StatBoxProps = {
  stat: {
    name: string;
    value: string;
  };
  dragHandleProps?: React.HTMLAttributes<SVGElement>;
};
const StatBox: React.FC<StatBoxProps> = ({ stat, dragHandleProps }) => {
  return (
    <div className={styles.statBox}>
      {/* <Grip className={styles.gripIcon} size={16} {...dragHandleProps} /> */}
      <h2>{stat.name}</h2>
      <h3>{stat.value}</h3>
    </div>
  );
};

export default StatBox;
