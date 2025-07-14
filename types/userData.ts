export type UserData = {
  name: string;
  level: string;
  avatar?: string;
  email: string;
  createdAt: string;
  id: string;
  clubs: {}[];
  profileSetup: {
    addedClubData: boolean;
    addedHanicap: boolean;
    addedLocation: boolean;
    addedSession: boolean;
    verified: boolean;
  }
};