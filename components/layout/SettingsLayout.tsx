"use client";

import React from "react";
import styles from "./Layout.module.scss";


type SettingsLayoutProps = {
  children: React.ReactNode;
};

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {


  return (
    <div className={styles.settingsLayout}>
      {children}
    </div>
  );
};

export default SettingsLayout;
