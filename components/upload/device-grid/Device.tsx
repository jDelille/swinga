"use client";

import React from "react";
import styles from "./DeviceGrid.module.scss";
import Button from "@/components/reusable/button/Button";
import { useModalStore } from "@/store/useModalStore";

type DeviceProps = {
  logo: string;
  buttonText: string;
  route: string;
  index: number;
};

const Device: React.FC<DeviceProps> = ({ logo, buttonText, route, index }) => {
  const { openModal } = useModalStore();

  return (
    <div className={styles.device}>
      <img src={logo} alt="logo" />
      <Button
        children={buttonText}
        variant="secondary"
        onClick={() => openModal("deviceModal")}
        disabled={index > 0}
      />
    </div>
  );
};

export default Device;
