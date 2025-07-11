"use client";

import React from "react";
import styles from "./Widget.module.scss";
import Button from "../reusable/button/Button";

type LessonPlanProps = {};
const LessonPlan: React.FC<LessonPlanProps> = () => {

  const handleCreateLessonPlanClick = () => {
    console.log("Create lesson plan")
  }

  const handleViewLessonsClick = () => {
    console.log("View lesson plans")
  }

  return (
    <div className={styles.lessonPlan}>
      <div className={styles.startMessage}>
        <h2>Plan Your Improvement</h2>
        <p>
          Create a step-by-step plan to improve your swing and track progress.
        </p>
        <Button onClick={handleCreateLessonPlanClick}>
          Create Lesson Plan
        </Button>
        <Button onClick={handleViewLessonsClick} variant="secondary">
          View Lesson Plans
        </Button>
      </div>
    </div>
  );
};

export default LessonPlan;
