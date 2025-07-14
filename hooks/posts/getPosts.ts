import { auth, db } from "@/firebase/config";
import { Post } from "@/types/post";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const user = auth.currentUser;

            
            if (!user) throw new Error("User not authenticated");

            const q = query(
                collection(db, "users", user.uid, "posts"),
                orderBy("date", "desc")
            );

            const snapshot = await getDocs(q);

            console.log(snapshot)
            const data: Post[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Post, "id">),
            }))

            setPosts(data);
        } catch (err) {
            setError(err as Error)
        } finally {
            setLoading(false)
        }
    }
    fetchPosts();
  }, []);
  

  return { posts, loading, error };
};
