import SinglePageLayout from '@/components/layout/SinglePageLayout';
import Table from '@/components/reusable/table/Table';
import CsvUpload from '@/components/upload/csv-upload/CsvUpload';
import UploadHeader from '@/components/upload/upload-header/UploadHeader';
import React from 'react';

type SquareGolfUploadPageProps = {
 
 }
const SquareGolfUploadPage: React.FC<SquareGolfUploadPageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <UploadHeader device='Square Golf' />
        <CsvUpload />
      </SinglePageLayout>
    </div>
  );
};

export default SquareGolfUploadPage;