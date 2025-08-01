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
  bio: string;
  favoriteCourse: string;
  handicap: string;
  profileSetup: {
    addedClubData: boolean;
    addedHandicap: boolean;
    addedLocation: boolean;
    addedSession: boolean;
    verified: boolean;
  }
};