import SinglePageLayout from '@/components/layout/SinglePageLayout';
import React from 'react';

type SquareGolfUploadPageProps = {
 
 }
const SquareGolfUploadPage: React.FC<SquareGolfUploadPageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Upload your Square Golf range session</h2>
        <p>Import the CSV file from your square golf range session.</p>
      </SinglePageLayout>
    </div>
  );
};

export default SquareGolfUploadPage;