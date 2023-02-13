import styles from "./Profile.module.css";
import Navbar from "@/components/Navbar/Navbar";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import StatsColumn from "@/components/StatsColumn/StatsColumn";
import { Lato } from "@next/font/google";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import { useContext } from "react";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const Profile = ({ userId }) => {
  let context = useContext(UserContext);
  let { user, setUser } = context;

  return (
    <div className={`${styles.profileWrapper} ${lato.className}`}>
      <Navbar></Navbar>
      <div className={styles.mainbodyWrapper}>
        <ProfileCard></ProfileCard>
        <div className={styles.askQuestionButtonWrapper}>
          <Link href={"/ask"} className={styles.askQuestionButton}>
            Ask a Question?
          </Link>
        </div>
        <div className={styles.statsPanel}>
          <div className={styles.questionPanel}>
            <span className={styles.panelHeader}>Recently Asked</span>
            <StatsColumn type="questionColumn"></StatsColumn>
          </div>
          <div className={styles.answerPanel}>
            <span className={styles.panelHeader}>Recently Answered</span>
            <StatsColumn type="answerColumn"></StatsColumn>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      userId: params.id,
    },
  };
}

export default Profile;
