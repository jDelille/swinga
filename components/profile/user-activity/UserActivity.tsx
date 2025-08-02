import React, { useEffect, useRef, useState } from "react";
import styles from "./UserActivity.module.scss";
import Sessions from "./sessions/Sessions";

type UserActivityProps = {};

const tabs = ["Overview", "Feed", "Sessions", "Challenges", "Badges", "Stats"];

const UserActivity: React.FC<UserActivityProps> = () => {
  const tabRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl) {
      setUnderlineStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className={styles.userActivity}>
      <div className={styles.header}>
        <ul className={styles.tabList}>
          {tabs.map((tab) => (
            <li
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              onClick={() => handleTabClick(tab)}
              className={tab === activeTab ? styles.active : ""}
            >
              {tab}
            </li>
          ))}
          <div className={styles.underline} style={underlineStyle}></div>
        </ul>
      </div>
      <div className={styles.section}>
        {activeTab === "Sessions" && <Sessions />}
      </div>
    </div>
  );
};

export default UserActivity;
