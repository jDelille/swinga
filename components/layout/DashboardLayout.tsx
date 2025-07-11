import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import Footer from "../footer/Footer";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <Navbar />
      <div className={styles.pageContent}>
        <LeftSidebar />
        <main role="main" aria-label="Page content">
          {children}
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
