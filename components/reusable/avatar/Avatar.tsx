import React from 'react';
import styles from './Avatar.module.scss';

type AvatarProps = {
    src?: string;
    alt?: string;
    onClick?: () => void;
 }
const Avatar: React.FC<AvatarProps> = ({src, alt, onClick}) => {
  return (
    <div className={styles.avatar} onClick={onClick}>
        <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;