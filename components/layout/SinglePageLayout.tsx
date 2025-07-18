import React from "react";
import styles from "./Layout.module.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

type SinglePageLayoutProps = {
  children: React.ReactNode;
  isAuth?: boolean;
};
const SinglePageLayout: React.FC<SinglePageLayoutProps> = ({ children, isAuth}) => {
  return (
    <div className={styles.singlePageLayout}>
      <Navbar isAuth={isAuth} />
      <div className={styles.pageContent}>
        <main role="main" aria-label="Page content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePageLayout;
