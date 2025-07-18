import React from "react";
import styles from "../EditProfile.module.scss";
import { useModalStore } from "@/store/useModalStore";

type PlayingProfileProps = {};
const PlayingProfile: React.FC<PlayingProfileProps> = () => {
  const { modals, openModal, closeModal } = useModalStore();

  return (
    <section>
      <div className={styles.content}>
        <h2>Playing Profile</h2>
        <ul>
          <li>
            <h3>
              Golf Bag <span onClick={() => openModal("golfBag")}>Edit</span>
            </h3>
            <p>Default Golf Bag</p>
          </li>
          <li>
            <h3>
              Hanidcap <span>Edit</span>
            </h3>
            <p>+8</p>
          </li>
          <li>
            <h3>
              Preferred Units <span>Edit</span>
            </h3>
            <p>Yards, mph</p>
          </li>
          <li>
            <h3>
              Wind Adjustment<span>Edit</span>
            </h3>
            <p>5 mph, SE</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlayingProfile;
