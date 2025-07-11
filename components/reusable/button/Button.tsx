import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[variant])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
