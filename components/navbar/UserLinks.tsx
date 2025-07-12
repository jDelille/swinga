import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type UserLinksProps = {};
const UserLinks: React.FC<UserLinksProps> = () => {
  return (
    <ul className={styles.links}>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link href={"/upload"}>Upload</Link>
      </li>
      <li>
        <Link href={"/sessions"}>Sessions</Link>
      </li>
      <li>
        <Link href={"/challenges"}>Challenges</Link>
      </li>
      <li>
        <Link href={"/badges"}>Badges</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </ul>
  );
};

export default UserLinks;
