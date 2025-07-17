import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { GolfBag } from "@/types/golfBag";

export const useGolfBag = () => {
  const [golfBag, setGolfBag] = useState<GolfBag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setGolfBag([]);
        setLoading(false);
        return;
      }

      try {
        const bagRef = collection(db, "users", user.uid, "golfBag");
        const snap = await getDocs(bagRef);

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<GolfBag, "id">),
        }));

        setGolfBag(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { golfBag, loading, error };
};