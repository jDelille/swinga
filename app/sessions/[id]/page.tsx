
import SinglePageLayout from '@/components/layout/SinglePageLayout';
import ViewSession from '@/components/sessions/view-session/ViewSession';
import React from 'react';

type SessionProps = {
 
 }
const Session: React.FC<SessionProps> = () => {


  
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Session</h2>
        <ViewSession />
      </SinglePageLayout>
    </div>
  );
};

export default Session;