import SettingsLayout from '@/components/layout/SettingsLayout';
import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type EditProfilePageProps = {
 
 }
const EditProfilePage: React.FC<EditProfilePageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Edit Profile</h2>
      </SinglePageLayout>
    </div>
  );
};

export default EditProfilePage;