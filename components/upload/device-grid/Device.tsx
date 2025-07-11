import React from "react";
import styles from "./DeviceGrid.module.scss";
import Button from "@/components/reusable/button/Button";

type DeviceProps = {
  logo: string;
  buttonText: string;
};

const Device: React.FC<DeviceProps> = ({logo, buttonText}) => {
  return (
    <div className={styles.device}>
      <img src={logo} alt="logo" />
      <Button children={buttonText} variant="secondary" />
    </div>
  );
};

export default Device;
