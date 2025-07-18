import React, { useState } from "react";
import styles from "../EditProfile.module.scss";
import EditableField from "./EditableField";
import { UserData } from "@/types/userData";
import { updateUserProfile } from "@/lib/user/update-profile/updateProfile";

type AccountInformationProps = {
  user: UserData | null;
  userUid: string | undefined;
};
const AccountInformation: React.FC<AccountInformationProps> = ({ user, userUid }) => {
  if (!user) return;

  const [fields, setFields] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio ?? "Write something about yourself",
    location: user.location,
    favoriteCourse: user.favoriteCourse ?? "Share your favorite course / club",
    handicap: user.handicap ?? "Share your handicap",
  });

  const updateField = async (key: keyof typeof fields, newValue: string) => {
    setFields((prev) => ({ ...prev, [key]: newValue }));

    if (!userUid) return;

    try {
      await updateUserProfile(userUid, { [key]: newValue });
      // toast.success(`${key} updated!`);
    } catch (err) {
      console.error("Failed to update profile:", err);
      // toast.error(`Failed to update ${key}`);

      setFields((prev) => ({
        ...prev,
        [key]: user[key as keyof typeof user] || "",
      }));
    }
  };

  
  return (
    <section>
      <div className={styles.content}>
        <h2>Account Information</h2>
        <ul>
          <EditableField
            label="Name"
            value={fields.name}
            onSave={(val) => updateField("name", val)}
            editText={"This is how your name will appear."}
          />
          <EditableField
            label="Email"
            value={fields.email}
            onSave={(val) => updateField("email", val)}
            editText={"Use an email address you'll always have access to."}
          />
          <EditableField
            label="Bio"
            value={fields.bio}
            onSave={(val) => updateField("bio", val)}
            editText={"Write something about yourself."}
          />
          <EditableField
            label="Location"
            value={fields.location}
            onSave={(val) => updateField("location", val)}
            editText={"Share your location."}
          />
          <EditableField
            label="Favorite Course / Club"
            value={fields.favoriteCourse}
            onSave={(val) => updateField("favoriteCourse", val)}
            editText={"Share your favorite course / club."}
          />
          <EditableField
            label="Handicap"
            value={fields.handicap}
            onSave={(val) => updateField("handicap", val)}
            editText={"Share your handicap."}
          />
        </ul>
      </div>
    </section>
  );
};

export default AccountInformation;
