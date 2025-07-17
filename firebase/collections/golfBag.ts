import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config";
import { GOLF_CLUBS } from "@/constants/golfClubs";

export async function createDefaultGolfBag(uid: string) {
    const golfBagRef = collection(db, "users", uid, "golfBag");

    const promises = GOLF_CLUBS.map((club) => (
        addDoc(golfBagRef, {
            ...club,
            enabled: true,
            avgYardage: null,
            manualYardage: null,
            createdAt: serverTimestamp()
        })
    ))

    await Promise.all(promises);
    console.log("Golf Bag Created")
}