import styles from "../styles/Feed.module.css";
import Navbar from "@/components/Navbar/Navbar";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { QuestionsContext } from "@/contexts/QuestionsContext";
import { UserContext } from "@/contexts/UserContext";
import Router from "next/router";

const Feed = () => {
  let context = useContext(QuestionsContext);
  let { questions, setQuestions } = context;

  context = useContext(UserContext);
  let { user, setUser } = context;

  useEffect(() => {
    if (user === undefined) {
      Router.push("/login");
    }
  }, []);

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.feedWrapper}>
        <div className={styles.feedBox}>
          {questions.map((question) => {
            return <QuestionCard key={question.id} q={question}></QuestionCard>;
          })}
        </div>
        <Sidebar></Sidebar>
      </div>
    </main>
  );
};

export default Feed;
