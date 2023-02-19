import styles from "./ProfileCard.module.css";
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext";
import { Lato } from "@next/font/google";
import showToolTip from "@/helper/ShowToolTip";
import hideToolTip from "@/helper/HideToolTip";
import Router from "next/router";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const handleRedirect = () => {
  Router.push("/profile/edit");
};

const ProfileCard = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        let { user, setUser } = context;

        return (
          <div className={`${styles.profileCard} ${lato.className}`}>
            <div
              className={styles.editProfile}
              onMouseEnter={showToolTip}
              onMouseLeave={hideToolTip}
              onClick={handleRedirect}
            >
              <Image
                src="/images/editing.png"
                alt="edit profile"
                width={20}
                height={20}
              ></Image>
              <div className={styles.toolTip} id="tool-tip">
                Edit Profile
              </div>
            </div>
            <div className={styles.profileImageContainer}>
              <Image
                src={"/profiles/" + user.profileImage}
                alt="profile-image"
                width={150}
                height={150}
                className={styles.profileImage}
              ></Image>
            </div>
            <div className={styles.infoContainer}>
              <span className={styles.name}>{user.userName}</span>
              <span className={styles.email}>{user.email}</span>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ProfileCard;
