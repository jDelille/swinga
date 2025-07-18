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

  await updateDoc(userRef, updatedData);

  return true;
}
