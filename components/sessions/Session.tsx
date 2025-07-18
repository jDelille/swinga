import React from "react";
import styles from "./Sessions.module.scss";
import { formatDateLong } from "@/hooks/format-date/FormatDateLong";
import { getClubsUsedWithCounts } from "@/hooks/range-sessions/getClubsUsed";

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
        <p className={styles.count}>{session.shotCount} shots</p>
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
     
    </div>
  );
};

export default Session;

{
  /* <Table shots={shots} hideSelect /> */
}
