import React from 'react';
import styles from '../EditProfile.module.scss';

type LoginAndSecurityProps = {};
const LoginAndSecurity: React.FC<LoginAndSecurityProps> = () => {
  return (
    <section>
      <div className={styles.content}>
        <h2>Login & Security</h2>
      </div>
    </section>
  );
};

export default LoginAndSecurity;