import React from 'react';
import styles from './UploadHeader.module.scss';

type UploadHeaderProps = {
    device: string;
 }
const UploadHeader: React.FC<UploadHeaderProps> = ({device}) => {
  return (
    <div className={styles.uploadHeader}>
      <h2>Upload your {device} range session</h2>
      <p className={styles.message}>Your uploaded sessions will not show club data. Square Golf does not allow this data to be exported.</p>
    </div>
  );
};

export default UploadHeader;