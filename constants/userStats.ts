 const stats = [
  "Avg Offline (yd)",
  "Miss Tendency",
  "Consistency",
  "Shots Tracked",
  "Smash Factor",
  "Ball Speed (mph)",
  "Carry Distance (yd)",
  "Total Distance (yd)",
  "Launch Angle (°)",
  "Attack Angle (°)",
  "Back Spin (rpm)",
  "Side Spin (rpm)",
  "Face Angle (°)",
  "Club Path (°)",
  "Launch Direction (°)",
  "Spin Rate (rpm)",
  "Spin Axis (°)",
  "Landing Angle (°)",
  "Dynamic Loft (°)",
  "Apex Height (yd)",
  "Shot Height (yd)",
  "Face to Path (°)",
  "Shot Dispersion (yd)",
  "Shot Shape Bias",
];

export default stats;

export type Stat = { name: string; value: string };


export const mapFirestoreToStats = (data: any): Stat[] => {
  // Map Firestore fields to the stats array structure you use
  console.log(data)
  return [
    {
      name: "Avg Offline (yd)",
      value: data.genericAverages.offlineAvg ? `${data.genericAverages.offlineAvg.toFixed(1)} yds` : "N/A",
    },
    {
      name: "Club Path (°)",
      value: data.genericAverages.clubPathAvg ? `${data.genericAverages.clubPathAvg.toFixed(1)}°` : "N/A",
    },
    {
      name: "Face Angle (°)",
      value: data.genericAverages.faceAngleAvg ? `${data.genericAverages.faceAngleAvg.toFixed(1)}°` : "N/A",
    },
    {
      name: "Shots Tracked",
      value: data.genericAverages.shotCount ? `${data.genericAverages.shotCount}` : "0",
    },
    // Add any other mapped stats you want here
  ];
};