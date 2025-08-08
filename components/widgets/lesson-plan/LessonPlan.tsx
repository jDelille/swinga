"use client";

import React from "react";
import Button from "../../reusable/button/Button";
import { useRouter } from "next/navigation";
import styles from './LessonPlan.module.scss';

type LessonPlanProps = {};
const LessonPlan: React.FC<LessonPlanProps> = () => {
  const router = useRouter();

  const handleCreateLessonPlanClick = () => {
    router.push("/lesson-plan/create")
  }

  const handleViewLessonsClick = () => {
    router.push("/lesson-plan/view")
  }

  const hasLessonPlan = true;

  return (
    <div className={styles.lessonPlan}>
      {hasLessonPlan ? (
        <>
          <div className={styles.lessonPlanHeader}>
            <p>Lesson Plan</p>
            <span>Edit</span>
          </div>
          <div className={styles.lessons}>
            <div className={styles.lesson}>
              <div className={styles.priority}>
                High
              </div>
            </div>
            <div className={styles.lesson}>
               <div className={styles.priority}>
                Med
              </div>
            </div>
            <div className={styles.lesson}>
               <div className={styles.priority}>
                Low
              </div>
            </div>

          </div>
        </>

      ) : (
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
      )}
    </div>
  );
};

export default LessonPlan;
