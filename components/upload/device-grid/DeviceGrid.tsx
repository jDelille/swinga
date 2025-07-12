import React from "react";
import styles from "./DeviceGrid.module.scss";
import Device from "./Device";
import { devices } from "./devices";

type DeviceGridProps = {};

const DeviceGrid: React.FC<DeviceGridProps> = () => {
  return (
    <div className={styles.deviceGrid}>
      {devices.map((device, index) => (
        <Device
          key={device.id}
          logo={device.logo}
          route={device.route}
          buttonText={index > 0 ? "Coming Soon" : "Get Started"}
          index={index}
        />
      ))}
    </div>
  );
};

export default DeviceGrid;
