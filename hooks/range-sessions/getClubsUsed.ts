import { useMemo } from "react";

type ShotData = {
  id: string;
  Club?: string;
  [key: string]: any;
};

type ClubUsage = {
  club: string;
  count: number;
};

export function getClubsUsedWithCounts(shots: ShotData[]): ClubUsage[] {
  return useMemo(() => {
    const clubMap: Record<string, number> = {};

    // Count usage
    shots.forEach((shot) => {
      const clubName = shot.Club?.trim();
      if (!clubName) return;
      clubMap[clubName] = (clubMap[clubName] || 0) + 1;
    });

    const unordered = Object.entries(clubMap).map(([club, count]) => ({
      club,
      count,
    }));

    // Priority order for sorting
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
      "Gap Wedge",
      "Sand Wedge",
      "Lob Wedge",
      "Putter",
    ];

    // Sort by clubPriority first, fallback to alphabetical
    const sorted = unordered.sort((a, b) => {
      const aIndex = clubPriority.indexOf(a.club);
      const bIndex = clubPriority.indexOf(b.club);

      if (aIndex === -1 && bIndex === -1) {
        // neither is in priority list → alphabetical
        return a.club.localeCompare(b.club);
      }
      if (aIndex === -1) return 1; // put unknowns last
      if (bIndex === -1) return -1;
      return aIndex - bIndex; // sort by priority order
    });

    return sorted;
  }, [shots]);
}