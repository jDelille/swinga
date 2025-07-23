"use client";

import React, { useMemo, useState } from "react";
import styles from "./DeviceGrid.module.scss";
import Device from "./Device";
import { devices } from "./devices";
import CsvUpload from "../csv-upload/CsvUpload";
import { useModalStore } from "@/store/useModalStore";
import Modal from "@/components/modal/Modal";
import { ShotData } from "@/types/shotData";
import { uploadRangeSession } from "@/lib/range-session/uploadRangeSession";

type DeviceGridProps = {};

const DeviceGrid: React.FC<DeviceGridProps> = () => {
  const { modals, closeModal } = useModalStore();
  const [parsedData, setParsedData] = useState<ShotData[]>([]);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  const handleDataParsed = (data: ShotData[], file: File) => {
    setParsedData(data);
    setFileToUpload(file);
  };

  const handleUpload = async () => {
    if (!parsedData.length) return alert("No data selected");

    setUploading(true);
    setUploadProgress(0);
    const estimatedSeconds = 3;
    setSecondsRemaining(estimatedSeconds);

    const interval = setInterval(() => {
      setUploadProgress((prev) => Math.min(prev + 100 / estimatedSeconds, 100));
      setSecondsRemaining((prev) => Math.max((prev || 0) - 1, 0));
    }, 1000);

    try {
      const sessionId = await uploadRangeSession(parsedData);
      alert(`Range session uploaded! Session ID: ${sessionId}`);
      closeModal("deviceModal");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      clearInterval(interval);
      setUploading(false);
      setUploadProgress(100);
      setSecondsRemaining(0);
      setParsedData([]);
      setFileToUpload(null);
    }
  };

  const deviceModalBody = useMemo(
    () => (
      <div className={styles.deviceModal}>
        <CsvUpload onDataParsed={handleDataParsed} />
      </div>
    ),
    [handleDataParsed]
  );

  return (
    <div className={styles.deviceGrid}>
      {devices.map((device, index) => (
        <Device
          key={device.id}
          logo={device.logo}
          route={device.route}
          buttonText={index > 0 ? "Coming Soon" : "Get Started"}
          index={index}
        />
      ))}

      <Modal
        isOpen={modals["deviceModal"]}
        title="Upload"
        onClose={() => closeModal("deviceModal")}
        body={deviceModalBody}
        description="Upload your Square Golf session"
        buttonText="Upload"
        onClick={handleUpload}
      />
    </div>
  );
};

export default DeviceGrid;
