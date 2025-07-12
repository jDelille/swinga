import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type NoUserLinksProps = {};
const NoUserLinks: React.FC<NoUserLinksProps> = () => {
  return (
    <ul className={styles.links}>
      <li>
        <Link href={"/features"}>Features</Link>
      </li>
      <li>
        <Link href={"/challenges"}>Challenges</Link>
      </li>
      <li>
        <Link href={"/support"}>Support</Link>
      </li>
    </ul>
  );
};

export default NoUserLinks;
