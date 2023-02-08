import styles from "./Profile.module.css";
import Navbar from "@/components/Navbar/Navbar";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import StatsColumn from "@/components/StatsColumn/StatsColumn";
import { Lato } from "@next/font/google";
import { UserContext } from "@/contexts/UserContext";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Profile = () => {
  return (
    <UserContext.Consumer>
      {(context) => {
        let { user, setUser } = context;
        return (
          <div className={`${styles.profileWrapper} ${lato.className}`}>
            <Navbar></Navbar>
            <div className={styles.mainbodyWrapper}>
              <ProfileCard></ProfileCard>
              <div className={styles.statsPanel}>
                <div className={styles.questionPanel}>
                  <span className={styles.panelHeader}>Recently Asked</span>
                  <StatsColumn></StatsColumn>
                </div>
                <div className={styles.answerPanel}>
                  <span className={styles.panelHeader}>Recently Answered</span>
                  <StatsColumn></StatsColumn>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Profile;
