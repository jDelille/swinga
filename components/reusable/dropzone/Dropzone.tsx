"use client";

import React, { useCallback } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.scss";
import { Upload } from "lucide-react";

type DropzoneProps = {
  onDrop: (files: File[]) => void;
  accept?: { [mimeType: string]: string[] };
  multiple?: boolean;
  variant?: "default" | "csv" | "image" | "compact";
  className?: string;
};

const Dropzone: React.FC<DropzoneProps> = ({
  onDrop,
  accept,
  multiple,
  variant = "default",
  className,
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
      <Upload size={24} color="gray" />
      <input {...getInputProps()} />
      <p>Drag & Drop or <span>Choose file</span> to upload</p>
      <p className={styles.format}>(format .{variant})</p>
    </div>
  )
};

export default Dropzone;
