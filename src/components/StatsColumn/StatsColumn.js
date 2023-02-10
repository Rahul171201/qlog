import styles from "./StatsColumn.module.css";
import StatsCard from "../StatsCard/StatsCard";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import BlankCard from "../BlankCard/BlankCard";
import { QuestionsContext } from "@/contexts/QuestionsContext";

const StatsColumn = (props) => {
  let context = useContext(UserContext);
  let { user, setUser } = context;

  context = useContext(QuestionsContext);
  let { questions, setQuestions } = context;

  return (
    <div className={styles.columnWrapper}>
      {props.type === "questionColumn" ? (
        user.asked.length === 0 ? (
          <BlankCard
            title="No questions asked yet!"
            content="Curious? Start your day by asking a question!"
          ></BlankCard>
        ) : (
          user.asked.map((q) => {
            return (
              <StatsCard
                key={q.id}
                title={q.title}
                description={q.description}
                id={q.id}
              ></StatsCard>
            );
          })
        )
      ) : user.answered.length === 0 ? (
        <BlankCard
          title="No questions answered yet!"
          content="Start your day by answering a question!"
        ></BlankCard>
      ) : (
        user.answered.map((a) => {
          let q_title;
          questions.forEach((q) => {
            if (q.id === a.qid) {
              q_title = q.title;
            }
          });

          return (
            <StatsCard
              key={a.qid}
              title={q_title}
              description={a.content}
              id={a.qid}
            ></StatsCard>
          );
        })
      )}
    </div>
  );
};

export default StatsColumn;
