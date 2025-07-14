"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../reusable/button/Button";
import { BellIcon } from "@/icons";
import Avatar from "../reusable/avatar/Avatar";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import NoUserLinks from "./NoUserLinks";
import UserLinks from "./UserLinks";
import { UserData } from "@/types/userData";
import NotificationDropdown from "../dropdowns/NotificationDropdown";

type NavbarProps = {
  isAuth?: boolean;
  user?: UserData | null;
};

const Navbar: React.FC<NavbarProps> = ({ isAuth, user }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleStartTrialClick = () => {
    console.log("Start Trial...");
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked...");
  };

  const handleLoginClick = () => {
    console.log("Login clicked...");
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
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
          {!isAuth && (
              <div className={styles.notifications}>
                <BellIcon
                  size={24}
                  color="gray"
                  onClick={handleNotificationClick}
                />

                {showNotifications && <NotificationDropdown />}
                <div className={styles.ball}></div>
              </div>
          )}
          <ThemeToggle />
          {!isAuth && user && (
            <Avatar onClick={handleAvatarClick} size={32} src={user?.avatar} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
