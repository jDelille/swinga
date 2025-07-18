import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <Link href={"/"}>SWINGA</Link>
          <span>© 2025 Swinga</span>
        </div>
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Product</h2>
          <ul>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/upload">Import Data</Link>
            </li>
            <li>
              <Link href="/badges">Badges</Link>
            </li>
            <li>
              <Link href="/challenges">Challenges</Link>
            </li>
             <li>
              <Link href="/lessons">Lessons</Link>
            </li>
            <li>
              <Link href="/weekly-review">Weekly Review</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Support</h2>
          <ul>
            <li>
              <Link href="/help">Help Center</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Explore</h2>
          <ul>
            <li>
              <Link href="/sessions">Your Sessions</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/goals">Goals</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Account</h2>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Company</h2>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href={"https://github.com/jDelille/swinga"} target="blank">Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
