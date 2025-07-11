"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../reusable/button/Button";
import { BellIcon } from "@/icons";
import Avatar from "../reusable/avatar/Avatar";
import ThemeToggle from "../theme-toggle/ThemeToggle";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {

    const handleStartTrialClick = () => {
        console.log("Start Trial...")
    }

    const handleAvatarClick = () => {
        console.log("Avatar clicked...")
    }


  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <Link href={"/"}>SWINGA</Link>
        </div>
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
        <div className={styles.right}>
            <Button children={"Start Trial"} onClick={handleStartTrialClick}/>
            <BellIcon size={24} color="gray"/>
            <ThemeToggle />
            <Avatar onClick={handleAvatarClick} size={32}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
