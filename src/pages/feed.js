import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";
import FeedBox from "@/components/FeedBox/FeedBox";

const Feed = () => {
  // user context
  const { user } = useContext(UserContext);

  useEffect(() => {
    // setSearchText(undefined);
    if (user === undefined) {
      Router.push("/login");
    }
  }, [user]);

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.feedWrapper}>
        {user ? <FeedBox></FeedBox> : <></>}
        <Sidebar></Sidebar>
      </div>
    </main>
  );
};

export default Feed;
