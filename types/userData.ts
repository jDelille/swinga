import { Timestamp } from "firebase/firestore";

export type UserData = {
  name: string;
  level: string;
  avatar?: string;
  email: string;
  createdAt: Timestamp;
  id: string;
  clubs: {}[];
  location: string;
  profileSetup: {
    addedClubData: boolean;
    addedHanicap: boolean;
    addedLocation: boolean;
    addedSession: boolean;
    verified: boolean;
  }
};