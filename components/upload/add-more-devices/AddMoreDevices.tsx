import React from "react";
import styles from "./AddMoreDevices.module.scss";
import Button from "@/components/reusable/button/Button";

type AddMoreDevicesProps = {};
const AddMoreDevices: React.FC<AddMoreDevicesProps> = () => {
  return (
    <div className={styles.addMore}>
      <h2>Dont see your device?</h2>
      <p>Reach out and tell us which device to add next.</p>
      <Button children={"Get in touch"} />
    </div>
  );
};

export default AddMoreDevices;
