import { Timestamp } from "firebase/firestore";

export type Notification = {
    id: string;
    createdAt: Timestamp;
    message: string;
    read: boolean;
    type: string;
}