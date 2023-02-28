import styles from "./ProfileCard.module.css";
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext";
import lato from "@/data/latoFont";
import uploadProfile from "@/helper/uploadProfile";
import Router from "next/router";
import ToolTip from "../ToolTip/ToolTip";
import { useContext, useRef, useState } from "react";

// Profile Card Component
const ProfileCard = () => {
  // user context
  const { user, setUser } = useContext(UserContext);
  const [showToolTip, setShowToolTip] = useState(false);

  const handleRedirect = () => {
    Router.push("/profile/edit");
  };

  return (
    <div className={`${styles.profileCard} ${lato.className}`}>
      <div
        className={styles.editProfile}
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
        onClick={handleRedirect}
      >
        <Image
          src="/images/editing.png"
          alt="edit profile"
          width={20}
          height={20}
        ></Image>
        {showToolTip ? <ToolTip></ToolTip> : <></>}
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
          <label htmlFor="profile-image" className={styles.labelProfileImage}>
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
            onChange={(e) => {
              const temp_user = uploadProfile(e, user);
              setUser(temp_user);
              Router.push("/profile/" + user.userId);
            }}
          ></input>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.name}>{user.userName}</span>
        <span className={styles.email}>{user.email}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
