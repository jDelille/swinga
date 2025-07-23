"use client";

import React, { useMemo, useState } from "react";
import { ShotData } from "@/types/shotData";
import { parseRangeCsv } from "@/lib/csv/parseRangeCsv";
import styles from "./CsvUpload.module.scss";
import Dropzone from "@/components/reusable/dropzone/Dropzone";
import Table from "@/components/reusable/table/Table";
import { formatFileSize } from "@/hooks/format-file-size/formatFileSize";
import { FileChartColumnIncreasing, X } from "lucide-react";
import {
  ClubUsage,
  getClubsUsedWithCounts,
} from "@/hooks/range-sessions/getClubsUsed";

type CsvUploadProps = {
  onDataParsed: (data: ShotData[], file: File) => void;
};

const CsvUpload: React.FC<CsvUploadProps> = ({ onDataParsed }) => {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: string;
  } | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  const [shotData, setShotData] = useState<ShotData[] | null>(null);

  const handleDrop = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    const sizeText = formatFileSize(file.size);
    setFileInfo({ name: file.name, size: sizeText });

    // Fake parsing progress
    setUploadProgress(0);
    setSecondsRemaining(3);
    const totalDuration = 3000;
    const stepTime = 100;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += stepTime;
      const progress = Math.min((elapsed / totalDuration) * 100, 100);
      const remaining = Math.max(
        0,
        Math.ceil((totalDuration - elapsed) / 1000)
      );
      setUploadProgress(progress);
      setSecondsRemaining(remaining);
      if (elapsed >= totalDuration) clearInterval(interval);
    }, stepTime);

    // Parse CSV
    const data = await parseRangeCsv(file);
    setShotData(data);
    onDataParsed(data, file);
  };

  const clubUsage = useMemo(() => {
    if (!shotData) return [];
    return getClubsUsedWithCounts(shotData);
  }, [shotData]);

  console.log(clubUsage);

  return (
    <div className={styles.csvUpload}>
      {!fileInfo && (
        <Dropzone
          onDrop={handleDrop}
          accept={{ "text/csv": [".csv"] }}
          variant="csv"
        />
      )}

      {fileInfo && (
        <div className={styles.uploadCard}>
          <div className={styles.top}>
            <FileChartColumnIncreasing
              size={39}
              color="green"
              strokeWidth={1}
              fill="white"
            />
            <div className={styles.text}>
              <p className={styles.fileName}>
                {fileInfo.name}{" "}
                <span>
                  <X size={16} color="gray" onClick={() => setFileInfo(null)} />
                </span>
              </p>
              <p className={styles.fileSize}>
                {fileInfo.size} <span className={styles.dot}>-</span>
                {secondsRemaining === 0 ? (
                  <span>Complete</span>
                ) : (
                  <span> {secondsRemaining} seconds left</span>
                )}
                <span className={styles.percent}>
                  {uploadProgress.toFixed(0)}%
                </span>
              </p>
            </div>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {fileInfo && (
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <p>Overview</p>
          <div className={styles.line}></div>
        </div>
      )}

      {shotData && fileInfo && (
        <div className={styles.shotData}>
          <p>{shotData.length} shots</p>
          <div className={styles.clubs}>
            {clubUsage.map((club) => (
              <p className={styles.club}>
                {club.club} <span>{club.count} shots</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CsvUpload;
