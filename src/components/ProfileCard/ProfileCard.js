import styles from "./ProfileCard.module.css";
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const ProfileCard = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        const currentUser = context;
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
              <span className={styles.name}>{currentUser.userName}</span>
              <span className={styles.email}>{currentUser.email}</span>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ProfileCard;
