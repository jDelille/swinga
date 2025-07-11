import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type ProfilePageProps = {
 
 }
const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Profile Page</h2>
      </SinglePageLayout>
    </div>
  );
};

export default ProfilePage;