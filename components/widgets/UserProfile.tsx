import React from "react";
import styles from "./Widget.module.scss";
import Avatar from "../reusable/avatar/Avatar";
import Link from "next/link";

type UserProfileProps = {};
const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.left}>
        <Avatar size={90} />
        <Link href={"/profile"}>Justin</Link>
        <p>Beginner</p>
      </div>
      <div className={styles.right}>
        <div className={styles.row}>
          <h2>1</h2>
          <p>Import</p>
        </div>
        <div className={styles.row}>
          <h2>4</h2>
          <p>Badges</p>
        </div>
        <div className={styles.row}>
          <h3>3</h3>
          <p>Connections</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
