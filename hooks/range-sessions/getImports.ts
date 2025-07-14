import { auth, db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";

export default async function getImports(): Promise<number | undefined> {
  const user = auth.currentUser;

  if (!user) return;

  try {
    const q = query(collection(db, "users", user.uid, "rangeSessions"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error(error);
  }
}
