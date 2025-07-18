import React from 'react';
import styles from './Layout.module.scss';
import EditProfile from '../profile/edit-profile/EditProfile';

type SettingsLayoutProps = {
   children: React.ReactNode;
 }

const SettingsLayout: React.FC<SettingsLayoutProps> = ({children}) => {
  return (
    <div className={styles.settingsLayout}>
      
      <EditProfile />
    </div>
  );
};

export default SettingsLayout;