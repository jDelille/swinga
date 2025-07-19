"use client";

import React from "react";
import styles from "./GettingStarted.module.scss";
import Button from "@/components/reusable/button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

type GettingStartedProps = {};
const GettingStarted: React.FC<GettingStartedProps> = () => {
  const router = useRouter();

  return (
    <div className={styles.gettingStarted}>
      <div className={styles.title}>
        <h2>Ready to Tee Off?</h2>
        <p>Here are a few steps to help you start swinging with Swinga.</p>
      </div>
      <div className={styles.step}>
        <h3>Upload your first range session</h3>
        <p>
          Upload your range session data seamlessly from your launch monitor
          device or software. Uploaded files must be .csv format. To learn more
          about how to export csv files from your device or software <Link href="/help/uploading">click here.</Link>
        </p>
        <Button children="Upload" onClick={() => router.push('/upload')} />
      </div>
      <div className={styles.step}>
        <h3>Make the most of your data.</h3>
        <p>
          Once your range session data is imported, you’ll unlock detailed
          insights into your performance. Track your progress over time,
          identify strengths and areas for improvement, set personal goals, and
          create lesson plans tailored to your game.
        </p>
        <Button children="Explore" />
      </div>
    </div>
  );
};

export default GettingStarted;
