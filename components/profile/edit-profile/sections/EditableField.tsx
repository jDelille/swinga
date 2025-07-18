import React, { useState } from "react";
import styles from "../EditProfile.module.scss";
import Button from "@/components/reusable/button/Button";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => void;
  editText: string;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onSave,
  editText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  return (
    <li>
      <h3>
        {label}{" "}
        {!isEditing ? (
          <span onClick={() => setIsEditing(true)}>Edit</span>
        ) : (
          <>
            <span
              onClick={() => {
                setTempValue(value);
                setIsEditing(false);
              }}
            >
              Cancel
            </span>
          </>
        )}
      </h3>

      {!isEditing ? <p>{value}</p> : <p>{editText}</p>}

      {isEditing && (
        <div className={styles.editField}>
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            autoFocus
            className={styles.editInput}
          />
          <Button children={"Save"} onClick={handleSave} variant="secondary" />
        </div>
      )}
    </li>
  );
};

export default EditableField;
