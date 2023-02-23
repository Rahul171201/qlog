import styles from "./Profile.module.css";
import Navbar from "@/components/Navbar/Navbar";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import StatsColumn from "@/components/StatsColumn/StatsColumn";
import lato from "@/data/latoFont";
import Link from "next/link";

const Profile = ({ userId }) => {
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
