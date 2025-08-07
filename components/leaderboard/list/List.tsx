import React from "react";
import styles from "./List.module.scss";

type ListProps = {};
const List: React.FC<ListProps> = () => {

    const leaderboard = [
  { rank: 4, username: "goldvideo7910", points: 749 },
  { rank: 5, username: "tesseract", points: 738 },
  { rank: 6, username: "dougjudy", points: 720 },
  { rank: 7, username: "ripspacks", points: 715 },
  { rank: 8, username: "brainchip", points: 707 },
  { rank: 9, username: "serenemonster4330", points: 698 },
  { rank: 10, username: "wiseskeleton4053", points: 692 },
  { rank: 11, username: "signedpower10777", points: 689 },
  { rank: 12, username: "raremagic4723", points: 684 },
  { rank: 13, username: "mistapineapples", points: 672 },
  { rank: 14, username: "damagedshowdown8625", points: 661 },
  { rank: 15, username: "tclarktpc", points: 655 },
  { rank: 16, username: "demoniclion3453", points: 643 },
  { rank: 17, username: "undyingtactics2211", points: 635 },
  { rank: 18, username: "lebronaldjames", points: 629 },
  { rank: 19, username: "demonictime7670", points: 620 },
  { rank: 20, username: "kilgourk", points: 612 },
  { rank: 21, username: "solhawj", points: 609 },
  { rank: 22, username: "powerfuldeck8682", points: 598 },
  { rank: 23, username: "uncommonlegacy72", points: 586 },
  { rank: 24, username: "cyberpunkcomics8578", points: 574 },
  { rank: 25, username: "jminny", points: 563 },
  { rank: 26, username: "whimsicaladventure9807", points: 551 },
  { rank: 27, username: "jc905888", points: 540 },
  { rank: 28, username: "tonynaj", points: 527 },
  { rank: 29, username: "magicalpack4481", points: 518 },
  { rank: 30, username: "makeitabud", points: 505 },
  { rank: 31, username: "scs318", points: 494 },
  { rank: 32, username: "stuber09", points: 488 },
  { rank: 33, username: "vintagehydra10609", points: 476 },
];

  return (
    <ul className={styles.list}>
      {leaderboard.map((user, index) => (
        <li key={index}>
            <span className={styles.rank}>#{user.rank}</span>
            <div className={styles.picture}></div>
            <p className={styles.name}>{user.username}</p>
            <span className={styles.points}>{user.points}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
