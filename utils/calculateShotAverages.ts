import { Stat } from "@/constants/userStats";

type Shot = {
  [key: string]: any;
};

export function calculateAverageStat(
  shots: Shot[],
  key: string,
  parseDirection: boolean = false
): number | null {
  const values = shots
    .map((shot) => {
      const raw = shot[key];
      if (typeof raw !== "string") return null;

      if (parseDirection) {
        const match = raw.match(/^([RL]?)(\d+(\.\d+)?)$/);
        if (!match) return null;
        const [, dir, val] = match;
        const num = parseFloat(val);
        return dir === "L" ? -num : num;
      }

      const num = parseFloat(raw);
      return isNaN(num) ? null : num;
    })
    .filter((val): val is number => val !== null);

  if (values.length === 0) return null;
  const sum = values.reduce((a, b) => a + b, 0);
  return sum / values.length;
}

/**
 * Calculate all generic averages and return an object
 */
export function calculateGenericAverages(shots: Shot[]) {
  return {
    offlineAvg: calculateAverageStat(shots, "Offline(yd)", true),
    clubPathAvg: calculateAverageStat(shots, "Club Path", true),
    faceAngleAvg: calculateAverageStat(shots, "Face Angle", true),
    // add more generic stats here 
  };
}

/**
 * Map Firestore data to displayable stats for UI
 */
export const mapFirestoreToStats = (data: any): Stat[] => {
  return [
    {
      name: "Avg Offline (yd)",
      value: data.genericAverages?.offlineAvg != null
        ? `${data.genericAverages.offlineAvg.toFixed(1)} yds`
        : "N/A",
    },
    {
      name: "Club Path (°)",
      value: data.genericAverages?.clubPathAvg != null
        ? `${data.genericAverages.clubPathAvg.toFixed(2)}°`
        : "N/A",
    },
    {
      name: "Face Angle (°)",
      value: data.genericAverages?.faceAngleAvg != null
        ? `${data.genericAverages.faceAngleAvg.toFixed(2)}°`
        : "N/A",
    },
    {
      name: "Shots Tracked",
      value: data.genericAverages?.shotCount != null ? `${data.genericAverages.shotCount}` : "0",
    },
    // add more stats 
  ];
};