import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type ChallengesPageProps = {};

const ChallengesPage: React.FC<ChallengesPageProps> = () => {
  return (
    <div className="page">
    <SinglePageLayout>
        <h2>Challenges</h2>
    </SinglePageLayout>
    </div>
  );
};

export default ChallengesPage;