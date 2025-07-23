import { useMemo } from "react";

type ShotData = {
  id: string;
  Club?: string;
  [key: string]: any;
};

export type ClubUsage = {
  club: string;
  count: number;
};

export function getClubsUsedWithCounts(shots: ShotData[]): ClubUsage[] {

  console.log("actually computing");
  
  const clubMap: Record<string, number> = {};

  shots.forEach((shot) => {
    const clubName = shot.Club?.trim();
    if (!clubName) return;
    clubMap[clubName] = (clubMap[clubName] || 0) + 1;
  });

  const unordered = Object.entries(clubMap).map(([club, count]) => ({
    club,
    count,
  }));

  const clubPriority = [
    "Driver",
    "3 Wood",
    "5 Wood",
    "7 Wood",
    "Hybrid",
    "3 Iron",
    "4 Iron",
    "5 Iron",
    "6 Iron",
    "7 Iron",
    "8 Iron",
    "9 Iron",
    "P-Wedge",
    "G-Wedge",
    "S-Wedge",
    "L-Wedge",
    "Putter",
  ];

  const sorted = unordered.sort((a, b) => {
    const aIndex = clubPriority.indexOf(a.club);
    const bIndex = clubPriority.indexOf(b.club);

    // If both not in priority, sort alphabetically
    if (aIndex === -1 && bIndex === -1) {
      return a.club.localeCompare(b.club);
    }
    // If only one is in priority, put it first
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    // Otherwise sort by priority order
    return aIndex - bIndex;
  });

  return sorted;
}