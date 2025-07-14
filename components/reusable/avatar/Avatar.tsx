import React from "react";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  size: number;
  src?: string;
  alt?: string;
  onClick?: () => void;
  redirect?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, onClick, size, redirect }) => {
  return (
    <div
      className={styles.avatar}
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
