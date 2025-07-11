import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type CreateLessonPlanPageProps = {
 
 }
const CreateLessonPlanPage: React.FC<CreateLessonPlanPageProps> = () => {
  return (
    <div className="page">
        <SinglePageLayout>
            <h2>Create lesson plan</h2>
        </SinglePageLayout>
    </div>
  );
};

export default CreateLessonPlanPage;