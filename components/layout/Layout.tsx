import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import Footer from "../footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
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

export default Layout;
