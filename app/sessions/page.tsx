import SinglePageLayout from '@/components/layout/SinglePageLayout';
import SessionsList from '@/components/sessions/SessionsList';
import React from 'react';

type SessionsProps = {
 
 }
const Sessions: React.FC<SessionsProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <SessionsList />
      </SinglePageLayout>
    </div>
  );
};

export default Sessions;