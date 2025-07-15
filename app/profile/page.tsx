import SinglePageLayout from '@/components/layout/SinglePageLayout';
import UserProfile from '@/components/profile/UserProfile';
import React from 'react';

type ProfilePageProps = {
 
 }
const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <UserProfile />
      </SinglePageLayout>
    </div>
  );
};

export default ProfilePage;