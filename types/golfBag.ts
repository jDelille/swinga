import { Timestamp } from "firebase/firestore";

export type GolfBag = {
    avgYardage: number | null;
    createdAt: Timestamp;
    enabled: boolean;
    loft: number;
    manualYardage: number | null;
    name: string;
    type: string;
}