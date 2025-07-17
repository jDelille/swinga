import SinglePageLayout from '@/components/layout/SinglePageLayout';
import EditProfile from '@/components/profile/edit-profile/EditProfile';
import React from 'react';

type EditProfilePageProps = {
 
 }
const EditProfilePage: React.FC<EditProfilePageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <EditProfile />
      </SinglePageLayout>
    </div>
  );
};

export default EditProfilePage;