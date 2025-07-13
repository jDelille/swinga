"use client";

import React, { useCallback } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.scss";

type DropzoneProps = {
  onDrop: (files: File[]) => void;
  accept?: { [mimeType: string]: string[] };
  multiple?: boolean;
  variant?: "default" | "csv" | "image" | "compact";
  className?: string;
  label?: string;
};

const Dropzone: React.FC<DropzoneProps> = ({
  onDrop,
  accept,
  multiple,
  variant = "default",
  className,
  label,
}) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple,
  });

  return (
     <div
      {...getRootProps()}
      className={clsx(
        styles.dropzone,
        styles[variant],
        isDragActive && styles.active,
        className
      )}
    >
      <input {...getInputProps()} />
      <p>{label}</p>
    </div>
  )
};

export default Dropzone;
