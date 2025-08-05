import React from "react";
import styles from "./Popup.module.scss";
import { X } from "lucide-react";

type PopupProps = {
  isOpen: boolean;
  body: React.ReactNode;
  onClose: () => void;
};
const Popup: React.FC<PopupProps> = ({ isOpen, body, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
         <div className={styles.header}>
          <div className={styles.icon}>
            <X
              size={20}
              width={20}
              onClick={onClose}
              cursor={"pointer"}
              color="gray"
            />
          </div>
        </div>
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
};

export default Popup;
