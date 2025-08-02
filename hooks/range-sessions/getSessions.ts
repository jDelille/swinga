import { db } from "@/firebase/config";
import { RangeSession } from "@/types/rangeSession";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function getSessions(userUid: string): Promise<RangeSession[]> {
  if (!userUid) return [];

  const q = query(
    collection(db, "users", userUid, "rangeSessions"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);

  const sessionsData = await Promise.all(
    querySnapshot.docs.map(async (sessionDoc) => {
      const sessionId = sessionDoc.id;
      const sessionData = sessionDoc.data();

      const shotsRef = collection(
        db,
        "users",
        userUid,
        "rangeSessions",
        sessionId,
        "shots"
      );
      const shotsSnapshot = await getDocs(shotsRef);
      const shots = shotsSnapshot.docs.map((shotDoc) => ({
        id: shotDoc.id,
        ...shotDoc.data(),
      }));

      return {
        id: sessionId,
        ...sessionData,
        shots,
      };
    })
  );

  return sessionsData; 
}