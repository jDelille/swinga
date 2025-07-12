"use client";

import React from "react";
import styles from "./DeviceGrid.module.scss";
import Button from "@/components/reusable/button/Button";
import { useRouter } from "next/navigation";

type DeviceProps = {
  logo: string;
  buttonText: string;
  route: string;
  index: number;
};

const Device: React.FC<DeviceProps> = ({ logo, buttonText, route, index }) => {
  const router = useRouter();

  return (
    <div className={styles.device}>
      <img src={logo} alt="logo" />
      <Button
        children={buttonText}
        variant="secondary"
        onClick={() => router.push(`/upload${route}`)}
        disabled={index > 0}
      />
    </div>
  );
};

export default Device;
