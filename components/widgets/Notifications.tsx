"use client";

import React from "react";
import styles from "./Widget.module.scss";
import { useNotifications } from "@/hooks/notifications/useNotifications";
import { formatDateShort } from "@/hooks/format-date/formatDateShort";

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
      <div className={styles.list}>
        {notifications.map((notif, index) => {
          if (index < 3) {
            return (
              <div className={styles.notif} key={notif.id}>
                <p>{notif.message}</p>
                <span>{formatDateShort(notif.createdAt)}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Notifications;
