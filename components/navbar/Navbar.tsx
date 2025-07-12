"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../reusable/button/Button";
import { BellIcon } from "@/icons";
import Avatar from "../reusable/avatar/Avatar";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import NoUserLinks from "./NoUserLinks";
import UserLinks from "./UserLinks";

type NavbarProps = {
  isAuth?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isAuth }) => {
  const handleStartTrialClick = () => {
    console.log("Start Trial...");
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked...");
  };

  const handleLoginClick = () => {
    console.log("Login clicked...");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <Link href={"/"}>SWINGA</Link>
        </div>
        {isAuth ? <NoUserLinks /> : <UserLinks />}
        <div className={styles.right}>
          <Button
            children={isAuth ? "Login" : "Start Trial"}
            onClick={isAuth ? handleLoginClick : handleStartTrialClick}
          />
          {!isAuth && <BellIcon size={24} color="gray" />}
          <ThemeToggle />
          {!isAuth && <Avatar onClick={handleAvatarClick} size={32} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
