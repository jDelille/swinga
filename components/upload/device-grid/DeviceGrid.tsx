import React from "react";
import styles from "./DeviceGrid.module.scss";
import Device from "./Device";

type DeviceGridProps = {};

const DeviceGrid: React.FC<DeviceGridProps> = () => {
  const logos = [
    "/devices/square-golf-logo.png",
    "/devices/gspro-logo.webp",
    "/devices/rapsodo-logo.png",
    "/devices/flightscope-logo.png",
    "/devices/garmin-logo.png",
    "/devices/foresight-logo.png",
    "/devices/fullswing-logo.png",
    "/devices/trackman-logo.png",
  ];

  return (
    <div className={styles.deviceGrid}>
      {logos.map((logo, index) => (
        <Device
          key={index}
          logo={logo}
          buttonText={index > 0 ? "Coming Soon" : "Get Started"}
        />
      ))}
    </div>
  );
};

export default DeviceGrid;
