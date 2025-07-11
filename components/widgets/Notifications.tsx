import React from "react";
import styles from "./Widget.module.scss";

type NotificationsProps = {};

const Notifications: React.FC<NotificationsProps> = () => {
  const notifications = [
    {
      id: 1,
      text: "This is another notification.",
      date: "Jul 10"
    },
     {
      id: 2,
      text: "This is a notification.",
      date: "Jul 9"
    },
  ];

  return (
    <div className={styles.notifications}>
      <div className={styles.label}>
        <p>Notifications <span>Show More</span></p>
      </div>
      <div className={styles.list}>
        {notifications.map((notif) => (
            <div className={styles.notif} key={notif.id}>
                <p>{notif.text}</p>
                <span>{notif.date}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
