import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export async function updateUserProfile(
  uid: string,
  updatedData: Partial<{
    name: string;
    email: string;
    bio: string;
    location: string;
    favoriteCourse: string;
    handicap: string;
  }>
) {
  if (!uid) throw new Error("Missing user UID");

  const userRef = doc(db, "users", uid);

  const profileSetupUpdates: Record<string, boolean> = {};

  if (updatedData.location !== undefined) {
    profileSetupUpdates["profileSetup.addedLocation"] = true;
  }
  if (updatedData.handicap !== undefined) {
    profileSetupUpdates["profileSetup.addedHandicap"] = true;
  }
  if (updatedData.favoriteCourse !== undefined) {
    profileSetupUpdates["profileSetup.addedClubData"] = true;
  }
  if (updatedData.name !== undefined || updatedData.email !== undefined || updatedData.bio !== undefined) {
    profileSetupUpdates["profileSetup.addedSession"] = true;
  }

  const mergedUpdate = {
    ...updatedData,
    ...profileSetupUpdates,
  };

  await updateDoc(userRef, mergedUpdate);

  return true;
}