import React from 'react';
import styles from './Avatar.module.scss';

type AvatarProps = {
    src?: string;
    alt?: string;
    onClick?: () => void;
    size: number;
 }
const Avatar: React.FC<AvatarProps> = ({src, alt, onClick, size}) => {
  return (
    <div className={styles.avatar} onClick={onClick} style={{width: size, height: size}}>
        <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;