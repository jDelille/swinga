import SinglePageLayout from '@/components/layout/SinglePageLayout';
import Table from '@/components/reusable/table/Table';
import CsvUpload from '@/components/upload/csv-upload/CsvUpload';
import React from 'react';

type SquareGolfUploadPageProps = {
 
 }
const SquareGolfUploadPage: React.FC<SquareGolfUploadPageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Upload your Square Golf range session</h2>
        <p>Import the CSV file from your square golf range session.</p>
        <CsvUpload />
      </SinglePageLayout>
    </div>
  );
};

export default SquareGolfUploadPage;