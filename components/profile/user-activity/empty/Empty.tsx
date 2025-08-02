import React from "react";
import styles from "./Empty.module.scss";

type EmptyProps = {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText?: string;
  primaryBtnClick?: () => void;
  secondaryBtnClick?: () => void;
};

const Empty: React.FC<EmptyProps> = ({
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnClick,
  secondaryBtnClick,
}) => {
  return (
    <div className={styles.emptyContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.buttons}>
        <button className={styles.primaryBtn} onClick={primaryBtnClick}>
          {primaryBtnText}
        </button>
        {secondaryBtnText && (
          <button className={styles.secondaryBtn} onClick={secondaryBtnClick}>
            {secondaryBtnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Empty;
