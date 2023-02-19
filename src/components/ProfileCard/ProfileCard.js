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

const ProfileCard = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        let { user, setUser } = context;

        const handleRedirect = () => {
          Router.push("/profile/edit");
        };

        const uploadProfile = (e) => {
          const profileImage = document.getElementById("profile-image");
          let reader = new FileReader();
          reader.readAsDataURL(profileImage.files[0]);
          reader.onload = () => {
            let temp_user = user;
            temp_user.profileImage = reader.result;
            setUser(temp_user);
          };
          e.target.value = "";
          Router.push("/profile/" + user.userId);
        };

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
                src={user.profileImage}
                alt="profile-image"
                width={150}
                height={150}
                className={styles.profileImage}
                id="final-profile-image"
              ></Image>
              <div className={styles.uploadProfile}>
                <label for="profile-image" className={styles.labelProfileImage}>
                  <Image
                    src="/images/camera.png"
                    alt="camera icon"
                    width={40}
                    height={40}
                  ></Image>
                </label>

                <input
                  type="file"
                  accept="image/*"
                  className={styles.fileInput}
                  id="profile-image"
                  onChange={uploadProfile}
                ></input>
              </div>
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
