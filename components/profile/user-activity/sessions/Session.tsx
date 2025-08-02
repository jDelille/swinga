import React from "react";
import styles from "./Sessions.module.scss";
import { RangeSession } from "@/types/rangeSession";
import { formatDateLong } from "@/hooks/format-date/FormatDateLong";
import { ExternalLink } from "lucide-react";
import { getClubsUsedWithCounts } from "@/hooks/range-sessions/getClubsUsed";
import { formatDateMedium } from "@/hooks/format-date/formatDateMedium";

type SessionProps = {
  session: RangeSession;
  index: number;
};

type ClubCategory = "Irons" | "Woods" | "Driver" | "Wedges"

const Session: React.FC<SessionProps> = ({ session, index }) => {
  const clubs = getClubsUsedWithCounts(session.shots);

  function getClubCategoryFromName(clubName: string): ClubCategory | null {
    const lower = clubName.toLowerCase();
    if (lower.includes("iron")) return "Irons";
    if (lower.includes("wood")) return "Woods";
    if (lower.includes("driver")) return "Driver";
    if (lower.includes("wedge")) return "Wedges"
    return null;
  }

  function getClubCategoryFromClubs(
    clubsUsed: { club: string; count: number }[]
  ): string {
    const categories = new Set<ClubCategory>();

    for (const { club } of clubsUsed) {
      const category = getClubCategoryFromName(club);
      if (category) categories.add(category);
    }

    if (categories.size === 1) {
      return [...categories][0]; // "Iron" | "Wood" | "Driver"
    } else if (categories.size > 1) {
      return "Mixed";
    } else {
      return "Unknown";
    }
  }

  const clubType = getClubCategoryFromClubs(clubs);

  return (
    <div className={styles.session}>
      <div className={styles.typeOfClubs}>{clubType}</div>
      <div className={styles.numOfShots}>{session.shots.length} shots</div>
      <div className={styles.name}>Range Session {index}</div>
      <div className={styles.date}>{formatDateMedium(session.createdAt)}</div>
      <ExternalLink size={22} strokeWidth={1.5} />
    </div>
  );
};

export default Session;
