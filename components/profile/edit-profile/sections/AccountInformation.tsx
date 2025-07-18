import React from "react";
import styles from "../EditProfile.module.scss";

type AccountInformationProps = {};
const AccountInformation: React.FC<AccountInformationProps> = () => {
  return (
    <section>
      <div className={styles.content}>
        <h2>Account Information</h2>
        <ul>
          <li>
            <h3>
              Name <span>Edit</span>
            </h3>
            <p>Justin Delille</p>
          </li>
          <li>
            <h3>
              Email Address <span>Edit</span>
            </h3>
            <p>justind7513@gmail.com</p>
          </li>
          <li>
            <h3>
              Bio <span>Edit</span>
            </h3>
            <p>This is a bio right here...</p>
          </li>
          <li>
            <h3>
              Location <span>Edit</span>
            </h3>
            <p>Scottsdale, Arizona</p>
          </li>
          <li>
            <h3>
              Favorite Course / Club <span>Edit</span>
            </h3>
            <p>Rancho Manana, Cave Creek</p>
          </li>
          <li>
            <h3>
              Handicap <span>Edit</span>
            </h3>
            <p>+8</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AccountInformation;
