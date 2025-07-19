import React from "react";
import styles from "./Dropdown.module.scss";
import {
  Award,
  ChartBar,
  HeartHandshake,
  MonitorCog,
  Settings,
  Upload,
  UserRound,
} from "lucide-react";
import Link from "next/link";

type SettingsDropdownProps = {};
const SettingsDropdown: React.FC<SettingsDropdownProps> = () => {
  return (
    <div className={styles.settingsDropdown}>
      <ul>
        <li>
          <UserRound size={16} />
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Upload size={16} />
          <Link href={"/upload"}>Upload</Link>
        </li>
        <li>
          <ChartBar size={16} />
          <Link href={"/sessions"}>Sessions</Link>
        </li>
        <li>
          <Award size={16} />
          <Link href={"/badges"}>Badges</Link>
        </li>
        <div className={styles.section}></div>
        <li>
          <Settings size={16} />
          <Link href="/account-settings">Account Settings</Link>
        </li>
        <li>
          <MonitorCog size={16} />
          <p>Display Preferences</p>
        </li>
        <li>
          <HeartHandshake size={16} />
          <p>Help Center</p>
        </li>
        <div className={styles.section}></div>
        <li>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default SettingsDropdown;
