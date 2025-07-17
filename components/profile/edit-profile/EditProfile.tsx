import React from 'react';
import styles from './EditProfile.module.scss';
import EditBag from './edit-bag/EditBag';

type EditProfileProps = {
 
 }
const EditProfile: React.FC<EditProfileProps> = () => {
  return (
    <div className={styles.editProfile}>
      <EditBag />
    </div>
  );
};

export default EditProfile;