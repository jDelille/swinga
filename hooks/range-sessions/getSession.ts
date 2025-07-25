import { db } from "@/firebase/config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getSession(userId: string, sessionId: string) {
  const sessionRef = doc(db, `users/${userId}/rangeSessions/${sessionId}`);
  const sessionSnap = await getDoc(sessionRef);

  if (!sessionSnap.exists()) return null;

  const sessionData = sessionSnap.data();

  const shotsRef = collection(db, `users/${userId}/rangeSessions/${sessionId}/shots`);
  const shotsSnap = await getDocs(shotsRef);

  const shots = shotsSnap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  return {
    id: sessionSnap.id,
    ...sessionData,
    shots, 
  };
}