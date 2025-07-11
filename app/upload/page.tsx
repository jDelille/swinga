import SinglePageLayout from "@/components/layout/SinglePageLayout";
import Button from "@/components/reusable/button/Button";
import React from "react";

type UploadPageProps = {};
const UploadPage: React.FC<UploadPageProps> = () => {


  return (
    <div className="page">
      <SinglePageLayout>
        <h2>Select Your Launch Monitor or App</h2>
        <p>Select the software or launch monitor you used below.</p>

        <div className="device-grid">
          <div className="device">
            <img src="/devices/square-golf-logo.png" alt="" />
            <Button children="Get Started"  variant="secondary"/>
          </div>
           <div className="device">
            <img src="/devices/gspro-logo.webp" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
          <div className="device">
            <img src="/devices/rapsodo-logo.png" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
          <div className="device">
            <img src="/devices/flightscope-logo.png" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
          <div className="device">
            <img src="/devices/garmin-logo.png" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
          <div className="device">
            <img src="/devices/foresight-logo.png" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
          <div className="device">
            <img src="/devices/fullswing-logo.png" alt="" />
            <Button children="Coming Soon"  variant="secondary"/>
          </div>
        </div>

        <div className="add-more">
          <h2>Dont see your device?</h2>
          <p>Reach out and tell us which device to add next.</p>
          <Button children={"Get in touch"} />
        </div>
      </SinglePageLayout>
    </div>
  );
};

export default UploadPage;
