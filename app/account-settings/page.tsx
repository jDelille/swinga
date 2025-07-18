import SettingsLayout from '@/components/layout/SettingsLayout';
import EditProfile from '@/components/profile/edit-profile/EditProfile';
import React from 'react';

type EditProfilePageProps = {
 
 }
const EditProfilePage: React.FC<EditProfilePageProps> = () => {
  return (
    <div className="page">
      <SettingsLayout>
        <EditProfile />
      </SettingsLayout>
    </div>
  );
};

export default EditProfilePage;