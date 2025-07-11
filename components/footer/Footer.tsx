import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

type FooterProps = {
 
 }
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <Link href={"/"}>SWINGA</Link>
          <span>© 2025 Swinga</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;