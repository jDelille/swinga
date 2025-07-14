"use client";

import React from "react";
import styles from "./Widget.module.scss";
import { useNotifications } from "@/hooks/notifications/useNotifications";

type NotificationsProps = {};

const Notifications: React.FC<NotificationsProps> = () => {
  const { notifications, loading, error } = useNotifications();

  return (
    <div className={styles.notifications}>
      <div className={styles.label}>
        <p>
          Notifications <span>Show More</span>
        </p>
      </div>
      
    </div>
  );
};

export default Notifications;
