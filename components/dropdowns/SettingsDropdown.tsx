import React from "react";
import styles from "./Dropdown.module.scss";
import { sections } from "@/constants/accountSettings";

type SettingsDropdownProps = {};
const SettingsDropdown: React.FC<SettingsDropdownProps> = () => {
  return (
    <div className={styles.settingsDropdown}>
      <ul>
        {sections.map((section, index) => (
          <li
            key={index}
            // onClick={() => setActiveSection(section.name)}
            // className={
            //   activeSection === section.name ? styles.active : styles.inactive
            // }
          >
            {section.icon}
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsDropdown;
