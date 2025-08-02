
export type Shot = {
  id: string;
  [key: string]: any; 
};

export type RangeSession = {
  id: string;
  createdAt?: any; // Firestore Timestamp
  shots: Shot[];
};