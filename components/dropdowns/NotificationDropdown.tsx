import React from "react";
import styles from "./Dropdown.module.scss";
import { useNotifications } from "@/hooks/notifications/useNotifications";
import { formatDateShort } from "@/hooks/format-date/formatDateShort";
import Link from "next/link";

type NotificationDropdownProps = {};
const NotificationDropdown: React.FC<NotificationDropdownProps> = () => {
  const { notifications, loading, error } = useNotifications();

  return (
    <div className={styles.notifDropdown}>
      <div className={styles.header}>
        <h2>
          Notifications <Link href={"/notifications"}>View More</Link>
        </h2>
        <p>You have {notifications.length} unread messages</p>
      </div>
      {/* {notifications && <p className={styles.label}>New</p>} */}
      <div className={styles.list}>
        {notifications.map((notif, index) => {
          if (index < 7) {
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

export default NotificationDropdown;
