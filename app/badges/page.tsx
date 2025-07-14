import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type BadgePageProps = {
 
 }
const BadgePage: React.FC<BadgePageProps> = () => {
  return (
    <div className="page">
        <SinglePageLayout>
            <h2>Badges</h2>
      </SinglePageLayout>
    </div>
  );
};

export default BadgePage;