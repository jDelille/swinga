"use client";

import React, { useState } from "react";
import { ShotData } from "@/types/shotData";
import { uploadRangeSession } from "@/lib/range-session/uploadRangeSession";
import { parseRangeCsv } from "@/lib/csv/parseRangeCsv";
import styles from "./CsvUpload.module.scss";

type CsvUploadProps = {};
const CsvUpload: React.FC<CsvUploadProps> = () => {
  const [jsonData, setJsonData] = useState<ShotData[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const data = await parseRangeCsv(file);
      setJsonData(data);
    } catch (err) {
      console.error("Parsing error: ", err);
    }
  };

  const handleUpload = async () => {
    if (jsonData.length === 0) {
      alert("No data to upload. Please upload a CSV first.");
      return;
    }

    setUploading(true);
    try {
      const sessionId = await uploadRangeSession(jsonData);
      alert(`Range session uploaded! Session ID: ${sessionId}`);
      setJsonData([]);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload range session.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.csvUpload}>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      {jsonData.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Session"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CsvUpload;
