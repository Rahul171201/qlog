import styles from "./StatsColumn.module.css";
import StatsCard from "./StatsCard/StatsCard";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import BlankCard from "./BlankCard/BlankCard";
import useLocalStorage from "@/hooks/useLocalStorage";

const StatsColumn = (props) => {
  // user context
  const { user, setUser } = useContext(UserContext);

  const [questions, setQuestions] = useLocalStorage("questions", new Map());
  const [answers, setAnswers] = useLocalStorage("answers", new Map());

  return (
    <div className={styles.columnWrapper}>
      {props.type === "questionColumn" ? (
        user.asked.length === 0 ? (
          <BlankCard
            title="No questions asked yet!"
            content="Curious? Start your day by asking a question!"
          ></BlankCard>
        ) : (
          user.asked.map((qid) => {
            const q = questions.get(qid);
            return (
              <StatsCard
                key={q.id}
                title={q.title}
                description={q.description}
                id={q.id}
                attachments={q.attachments}
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
        user.answered.map((aid) => {
          const a = answers.get(aid);
          const qid = a.qid;
          const q = questions.get(qid);
          const q_title = q.title;
          return (
            <StatsCard
              key={a.qid}
              title={q_title}
              description={a.content}
              id={a.qid}
              attachments={a.attachments}
            ></StatsCard>
          );
        })
      )}
    </div>
  );
};

export default StatsColumn;
