"use client";

import React from "react";
import styles from "./Modal.module.scss";
import { X } from "lucide-react";
import Button from "../reusable/button/Button";

type ModalProps = {
  isOpen: boolean;
  body: React.ReactNode;
  onClose: () => void;
  title: string;
  description: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, body, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
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
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>


        <div className={styles.body}>{body}</div>

        <div className={styles.footer}>
          <Button children={"Save"} variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
