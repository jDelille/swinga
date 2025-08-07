import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserLinksProps = {};
const UserLinks: React.FC<UserLinksProps> = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.links}>
      <li>
        <Link
          href={"/"}
          className={pathname === "/" ? styles.active : styles.inactive}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link 
        href={"/upload"}
        className={pathname === "/upload" ? styles.active : styles.inactive}
        >Upload</Link>
      </li>
      <li>
        <Link 
        href={"/sessions"} 
        className={pathname === "/sessions" ? styles.active : styles.inactive}
        >Sessions</Link>
      </li>
      <li>
        <Link 
        href={"/challenges"}
        className={pathname === "/challenges" ? styles.active : styles.inactive}
        >Challenges</Link>
      </li>
      <li>
        <Link 
        href={"/badges"}
        className={pathname === "/badges" ? styles.active : styles.inactive}
        >Badges</Link>
      </li>
      <li>
        <Link 
        href={"/leaderboard"}
        className={pathname === "/leaderboard" ? styles.active : styles.inactive}
        >Leaderboard</Link>
      </li>
    </ul>
  );
};

export default UserLinks;
