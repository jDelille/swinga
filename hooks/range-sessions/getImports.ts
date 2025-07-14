import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";

export default async function getImports(
  userId: string
): Promise<number | undefined> {
  if (!userId) return;

  try {
    const q = query(collection(db, "users", userId, "rangeSessions"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  } catch (error) {
    console.error(error);
  }
}
