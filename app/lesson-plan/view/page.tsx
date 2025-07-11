import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type ViewLessonPlansProps = {
 
 }
const ViewLessonPlans: React.FC<ViewLessonPlansProps> = () => {
  return (
    <div className="page">
        <SinglePageLayout>
            <h2>View Lesson plans</h2>
        </SinglePageLayout>
    </div>
  );
};

export default ViewLessonPlans;