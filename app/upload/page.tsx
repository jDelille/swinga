import SinglePageLayout from "@/components/layout/SinglePageLayout";
import { AddMoreDevices, DeviceGrid } from "@/components/upload";
import React from "react";

type UploadPageProps = {};
const UploadPage: React.FC<UploadPageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Select Your Launch Monitor or App</h2>
        <p>Select the software or launch monitor you used below.</p>
        <DeviceGrid />
        <AddMoreDevices />
      </SinglePageLayout>
    </div>
  );
};

export default UploadPage;
