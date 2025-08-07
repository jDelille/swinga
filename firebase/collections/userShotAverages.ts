import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { calculateGenericAverages } from "@/utils/calculateShotAverages"; // THIS should calculate all needed stats

const db = getFirestore();

export async function updateUserShotAverages(shots: any[]) {
  const user = getAuth().currentUser;
  if (!user) {
    console.warn("No user is logged in.");
    return;
  }

  // This returns an object like { offlineAvg: number, clubPathAvg: number, faceAngleAvg: number }
  const genericAverages = calculateGenericAverages(shots);

  const genericAveragesRef = doc(db, "users", user.uid, "averages", "general");

  await setDoc(genericAveragesRef, {
    genericAverages,
    shotCount: shots.length,
    updatedAt: new Date(),
  });

  console.log("Averages updated in Firestore.");
}