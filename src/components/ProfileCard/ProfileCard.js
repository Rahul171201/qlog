import styles from "./ProfileCard.module.css";
import Image from "next/image";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const ProfileCard = () => {
  return (
    <div className={`${styles.profileCard} ${lato.className}`}>
      <div className={styles.profileImageContainer}>
        <Image
          src="/profile.png"
          alt="profile-image"
          width={150}
          height={150}
          className={styles.profileImage}
        ></Image>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.name}>Souvik Patra</span>
        <span className={styles.email}>bengalBadshah@gmail.com</span>
      </div>
    </div>
  );
};

export default ProfileCard;
