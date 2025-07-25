import React from "react";
import styles from "./Sessions.module.scss";
import { formatDateLong } from "@/hooks/format-date/FormatDateLong";
import { getClubsUsedWithCounts } from "@/hooks/range-sessions/getClubsUsed";
import { Star } from "lucide-react";
import Link from "next/link";

type SessionProps = {
  session: any;
};
const Session: React.FC<SessionProps> = ({ session }) => {
  const clubsUsage = getClubsUsedWithCounts(session.shots);

  return (
    <div className={styles.session}>
      <div className={styles.header}>
        <div className={styles.date}>
          <p>{formatDateLong(session.createdAt)}</p>
        </div>
        <p className={styles.shotCount}>{session.shotCount} shots</p>
      </div>
      <div className={styles.clubs}>
        {clubsUsage.map(({ club, count }, index) => (
          <ul key={index}>
            <li key={club}>
              {club}
              <span>{count} shots</span>
            </li>
          </ul>
        ))}
      </div>

      <div className={styles.controls}>
        <Link href={`/sessions/${session.id}`}>View session</Link>
        <Star size={20} color="gray" />
      </div>
    </div>
  );
};

export default Session;

{
  /* <Table shots={shots} hideSelect /> */
}
